import React, { useState, useRef } from 'react';
import { Play, ArrowLeft, CheckCircle, AlertCircle, Copy, RotateCcw, Lightbulb } from 'lucide-react';
import Editor from '@monaco-editor/react';
import { Question } from '../data/questions';

interface CodeEditorProps {
  question: Question;
  questionIndex: number;
  onComplete: () => void;
  onBack: () => void;
  isCompleted: boolean;
}

const CodeEditor: React.FC<CodeEditorProps> = ({ 
  question, 
  questionIndex, 
  onComplete, 
  onBack, 
  isCompleted 
}) => {
  const [code, setCode] = useState(question.starterCode);
  const [output, setOutput] = useState('');
  const [isRunning, setIsRunning] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [showHints, setShowHints] = useState(false);
  const editorRef = useRef<any>(null);

  const handleEditorDidMount = (editor: any, monaco: any) => {
    editorRef.current = editor;
    
    // Configure JavaScript language features
    monaco.languages.typescript.javascriptDefaults.setDiagnosticsOptions({
      noSemanticValidation: false,
      noSyntaxValidation: false,
    });

    // Add custom JavaScript snippets and completions
    monaco.languages.registerCompletionItemProvider('javascript', {
      provideCompletionItems: (model: any, position: any) => {
        const suggestions = [
          {
            label: 'console.log',
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: 'console.log(${1:value});',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation: 'Prints a message to the console',
            detail: 'Console method'
          },
          {
            label: 'for loop',
            kind: monaco.languages.CompletionItemKind.Snippet,
            insertText: 'for (let ${1:i} = 0; ${1:i} < ${2:length}; ${1:i}++) {\n\t${3:// code}\n}',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation: 'For loop',
            detail: 'Loop statement'
          },
          {
            label: 'if statement',
            kind: monaco.languages.CompletionItemKind.Snippet,
            insertText: 'if (${1:condition}) {\n\t${2:// code}\n}',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation: 'If statement',
            detail: 'Conditional statement'
          },
          {
            label: 'function',
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: 'function ${1:name}(${2:params}) {\n\t${3:// code}\n\treturn ${4:value};\n}',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation: 'Function declaration',
            detail: 'Function'
          },
          {
            label: 'Math.sqrt',
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: 'Math.sqrt(${1:number})',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation: 'Returns the square root of a number',
            detail: 'Math method'
          },
          {
            label: 'Math.pow',
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: 'Math.pow(${1:base}, ${2:exponent})',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation: 'Returns base to the exponent power',
            detail: 'Math method'
          },
          {
            label: 'Math.random',
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: 'Math.random()',
            documentation: 'Returns a random number between 0 and 1',
            detail: 'Math method'
          },
          {
            label: 'Math.floor',
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: 'Math.floor(${1:number})',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation: 'Returns the largest integer less than or equal to a number',
            detail: 'Math method'
          },
          {
            label: 'Array.push',
            kind: monaco.languages.CompletionItemKind.Method,
            insertText: 'push(${1:element})',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation: 'Adds one or more elements to the end of an array',
            detail: 'Array method'
          },
          {
            label: 'Array.pop',
            kind: monaco.languages.CompletionItemKind.Method,
            insertText: 'pop()',
            documentation: 'Removes the last element from an array',
            detail: 'Array method'
          },
          {
            label: 'String.split',
            kind: monaco.languages.CompletionItemKind.Method,
            insertText: 'split(${1:separator})',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation: 'Splits a string into an array of substrings',
            detail: 'String method'
          },
          {
            label: 'String.reverse',
            kind: monaco.languages.CompletionItemKind.Method,
            insertText: 'reverse()',
            documentation: 'Reverses an array in place',
            detail: 'Array method'
          },
          {
            label: 'String.join',
            kind: monaco.languages.CompletionItemKind.Method,
            insertText: 'join(${1:separator})',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation: 'Joins all elements of an array into a string',
            detail: 'Array method'
          }
        ];
        
        return { suggestions };
      }
    });

    // Set editor theme and options
    monaco.editor.setTheme('vs-dark');
    
    // Configure editor options
    editor.updateOptions({
      fontSize: 14,
      lineHeight: 20,
      minimap: { enabled: false },
      scrollBeyondLastLine: false,
      wordWrap: 'on',
      automaticLayout: true,
      suggestOnTriggerCharacters: true,
      quickSuggestions: {
        other: true,
        comments: false,
        strings: false
      },
      parameterHints: {
        enabled: true
      },
      hover: {
        enabled: true
      }
    });
  };

  const runCode = () => {
    setIsRunning(true);
    setHasError(false);
    
    // Capture console.log output
    const originalLog = console.log;
    let logOutput: string[] = [];
    
    console.log = (...args) => {
      logOutput.push(args.map(arg => 
        typeof arg === 'object' ? JSON.stringify(arg, null, 2) : String(arg)
      ).join(' '));
    };

    try {
      // Create a safer evaluation environment
      const func = new Function(`
        ${code}
        
        // If the code doesn't have explicit console.log, try to return the result
        try {
          // Check if there's a return statement or expression
          const lines = \`${code}\`.trim().split('\\n');
          const lastLine = lines[lines.length - 1].trim();
          if (!lastLine.includes('console.log') && !lastLine.includes('return') && lastLine && !lastLine.startsWith('//')) {
            // Try to evaluate the last line as an expression
            const result = eval(lastLine);
            if (result !== undefined) {
              console.log(result);
            }
          }
        } catch (e) {
          // Ignore errors here, the main code execution will handle them
        }
      `);
      
      func();
      
      if (logOutput.length === 0) {
        setOutput('Code executed successfully (no output)');
      } else {
        setOutput(logOutput.join('\n'));
      }
    } catch (error) {
      setHasError(true);
      setOutput(`Error: ${error instanceof Error ? error.message : 'Unknown error'}`);
    } finally {
      console.log = originalLog;
      setIsRunning(false);
    }
  };

  const resetCode = () => {
    setCode(question.starterCode);
    setOutput('');
    setHasError(false);
  };

  const copyCode = () => {
    navigator.clipboard.writeText(code);
  };

  const formatCode = () => {
    if (editorRef.current) {
      editorRef.current.getAction('editor.action.formatDocument').run();
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <button
          onClick={onBack}
          className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors"
        >
          <ArrowLeft className="h-5 w-5" />
          <span>Back to Challenges</span>
        </button>
        
        <div className="flex items-center space-x-3">
          {isCompleted && (
            <div className="flex items-center space-x-2 bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
              <CheckCircle className="h-4 w-4" />
              <span>Completed</span>
            </div>
          )}
          <span className="text-sm text-gray-500">
            Challenge {questionIndex + 1} of 25
          </span>
        </div>
      </div>

      {/* Question Details */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          {question.title}
        </h1>
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
          <h2 className="text-lg font-semibold text-blue-900 mb-2">Challenge Description</h2>
          <p className="text-blue-800 leading-relaxed mb-4">
            {question.description}
          </p>
          {question.example && (
            <div>
              <h3 className="text-md font-semibold text-blue-900 mb-2">Example:</h3>
              <div className="bg-blue-100 p-3 rounded border font-mono text-sm text-blue-800">
                {question.example}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Code Editor and Output */}
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Code Editor */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-gray-900">Code Editor</h2>
            <div className="flex items-center space-x-2">
              <button
                onClick={copyCode}
                className="p-2 text-gray-500 hover:text-gray-700 transition-colors rounded-lg hover:bg-gray-100"
                title="Copy code"
              >
                <Copy className="h-4 w-4" />
              </button>
              <button
                onClick={formatCode}
                className="px-3 py-1 text-xs text-gray-600 hover:text-gray-800 border border-gray-300 rounded hover:bg-gray-50 transition-colors"
                title="Format code"
              >
                Format
              </button>
              <button
                onClick={resetCode}
                className="p-2 text-gray-500 hover:text-gray-700 transition-colors rounded-lg hover:bg-gray-100"
                title="Reset to starter code"
              >
                <RotateCcw className="h-4 w-4" />
              </button>
            </div>
          </div>
          
          <div className="relative border border-gray-300 rounded-lg overflow-hidden">
            <Editor
              height="400px"
              defaultLanguage="javascript"
              value={code}
              onChange={(value) => setCode(value || '')}
              onMount={handleEditorDidMount}
              theme="vs-dark"
              options={{
                fontSize: 14,
                lineHeight: 20,
                minimap: { enabled: false },
                scrollBeyondLastLine: false,
                wordWrap: 'on',
                automaticLayout: true,
                suggestOnTriggerCharacters: true,
                quickSuggestions: {
                  other: true,
                  comments: false,
                  strings: false
                },
                parameterHints: {
                  enabled: true
                },
                hover: {
                  enabled: true
                },
                bracketPairColorization: {
                  enabled: true
                },
                guides: {
                  bracketPairs: true
                }
              }}
            />
            <div className="absolute top-2 right-2 text-xs text-gray-400 bg-gray-800 px-2 py-1 rounded">
              Ctrl+Space for suggestions
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <button
              onClick={runCode}
              disabled={isRunning}
              className="flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Play className="h-4 w-4" />
              <span>{isRunning ? 'Running...' : 'Run Code'}</span>
            </button>
            
            {!isCompleted && (
              <button
                onClick={onComplete}
                className="flex items-center space-x-2 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
              >
                <CheckCircle className="h-4 w-4" />
                <span>Mark Complete</span>
              </button>
            )}

            {question.hints && question.hints.length > 0 && (
              <button
                onClick={() => setShowHints(!showHints)}
                className="flex items-center space-x-2 bg-yellow-100 text-yellow-700 px-4 py-2 rounded-lg font-medium hover:bg-yellow-200 transition-colors"
              >
                <Lightbulb className="h-4 w-4" />
                <span>{showHints ? 'Hide Hints' : 'Show Hints'}</span>
              </button>
            )}
          </div>
        </div>

        {/* Output */}
        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-gray-900">Output</h2>
          <div className={`h-96 p-4 border rounded-lg font-mono text-sm overflow-auto ${
            hasError 
              ? 'bg-red-50 border-red-200 text-red-800' 
              : 'bg-gray-900 border-gray-700 text-green-400'
          }`}>
            {hasError && (
              <div className="flex items-center space-x-2 mb-2 text-red-600">
                <AlertCircle className="h-4 w-4" />
                <span className="font-semibold">Error occurred:</span>
              </div>
            )}
            {output || (
              <div className="text-gray-500 italic">
                Click "Run Code" to see the output here...
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Hints Section */}
      {question.hints && question.hints.length > 0 && showHints && (
        <div className="mt-8 bg-yellow-50 border border-yellow-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-yellow-800 mb-3 flex items-center space-x-2">
            <Lightbulb className="h-5 w-5" />
            <span>Hints</span>
          </h3>
          <ul className="space-y-2">
            {question.hints.map((hint, index) => (
              <li key={index} className="text-yellow-700 flex items-start space-x-2">
                <span className="text-yellow-500 mt-1 font-bold">{index + 1}.</span>
                <span>{hint}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Quick Reference */}
      <div className="mt-8 bg-gray-50 border border-gray-200 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-3">Quick Reference</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
          <div>
            <h4 className="font-medium text-gray-700 mb-2">Console Output</h4>
            <code className="bg-gray-200 px-2 py-1 rounded text-xs">console.log(value)</code>
          </div>
          <div>
            <h4 className="font-medium text-gray-700 mb-2">Variables</h4>
            <code className="bg-gray-200 px-2 py-1 rounded text-xs">let name = value</code>
          </div>
          <div>
            <h4 className="font-medium text-gray-700 mb-2">Math Operations</h4>
            <code className="bg-gray-200 px-2 py-1 rounded text-xs">Math.sqrt(), Math.pow()</code>
          </div>
          <div>
            <h4 className="font-medium text-gray-700 mb-2">Conditions</h4>
            <code className="bg-gray-200 px-2 py-1 rounded text-xs">if (condition) {}</code>
          </div>
          <div>
            <h4 className="font-medium text-gray-700 mb-2">Loops</h4>
            <code className="bg-gray-200 px-2 py-1 rounded text-xs">for (let i = 0; i &lt; n; i++)</code>
          </div>
          <div>
            <h4 className="font-medium text-gray-700 mb-2">Arrays</h4>
            <code className="bg-gray-200 px-2 py-1 rounded text-xs">arr.push(), arr.pop()</code>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodeEditor;