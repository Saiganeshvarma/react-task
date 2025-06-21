import React, { useState, useEffect } from 'react';
import { Code, BookOpen, Home, Trophy, Play, CheckCircle } from 'lucide-react';
import HomePage from './components/HomePage';
import QuestionList from './components/QuestionList';
import CodeEditor from './components/CodeEditor';
import ResourcesPage from './components/ResourcesPage';
import { questions } from './data/questions';
import { getProgress, markQuestionComplete } from './utils/progress';

type Page = 'home' | 'questions' | 'resources' | 'editor';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [progress, setProgress] = useState<boolean[]>([]);

  useEffect(() => {
    setProgress(getProgress());
  }, []);

  const handleQuestionComplete = (questionIndex: number) => {
    markQuestionComplete(questionIndex);
    setProgress(getProgress());
  };

  const completedCount = progress.filter(Boolean).length;

  const renderNavigation = () => (
    <nav className="bg-white/95 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-2 rounded-lg">
              <Code className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              JS Learning Hub
            </span>
          </div>
          
          <div className="flex items-center space-x-6">
            <button
              onClick={() => setCurrentPage('home')}
              className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors ${
                currentPage === 'home' ? 'bg-blue-100 text-blue-700' : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              <Home className="h-4 w-4" />
              <span className="hidden sm:inline">Home</span>
            </button>
            
            <button
              onClick={() => setCurrentPage('questions')}
              className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors ${
                currentPage === 'questions' ? 'bg-blue-100 text-blue-700' : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              <Play className="h-4 w-4" />
              <span className="hidden sm:inline">Challenges</span>
            </button>
            
            <button
              onClick={() => setCurrentPage('resources')}
              className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors ${
                currentPage === 'resources' ? 'bg-blue-100 text-blue-700' : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              <BookOpen className="h-4 w-4" />
              <span className="hidden sm:inline">Resources</span>
            </button>
            
            <div className="flex items-center space-x-2 bg-gradient-to-r from-green-100 to-blue-100 px-3 py-2 rounded-lg">
              <Trophy className="h-4 w-4 text-green-600" />
              <span className="text-sm font-medium text-gray-700">
                {completedCount}/25
              </span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );

  const renderContent = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onGetStarted={() => setCurrentPage('questions')} />;
      case 'questions':
        return (
          <QuestionList
            questions={questions}
            progress={progress}
            onQuestionSelect={(index) => {
              setCurrentQuestion(index);
              setCurrentPage('editor');
            }}
          />
        );
      case 'resources':
        return <ResourcesPage />;
      case 'editor':
        return (
          <CodeEditor
            question={questions[currentQuestion]}
            questionIndex={currentQuestion}
            onComplete={() => handleQuestionComplete(currentQuestion)}
            onBack={() => setCurrentPage('questions')}
            isCompleted={progress[currentQuestion]}
          />
        );
      default:
        return <HomePage onGetStarted={() => setCurrentPage('questions')} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {renderNavigation()}
      <main className="flex-1">
        {renderContent()}
      </main>
    </div>
  );
}

export default App;