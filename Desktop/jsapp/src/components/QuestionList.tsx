import React from 'react';
import { CheckCircle, Circle, Code, Clock, Award } from 'lucide-react';
import { Question } from '../data/questions';
import CertificateModal from './CertificateModal';

interface QuestionListProps {
  questions: Question[];
  progress: boolean[];
  onQuestionSelect: (index: number) => void;
}

const QuestionList: React.FC<QuestionListProps> = ({ questions, progress, onQuestionSelect }) => {
  const [showCertificateModal, setShowCertificateModal] = React.useState(false);
  const completedCount = progress.filter(Boolean).length;
  const progressPercentage = (completedCount / questions.length) * 100;
  const allCompleted = completedCount === questions.length;

  return (
    <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          JavaScript Challenges
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Master JavaScript fundamentals through hands-on coding challenges
        </p>
        
        {/* Progress Bar */}
        <div className="max-w-md mx-auto">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-gray-700">Progress</span>
            <span className="text-sm font-medium text-blue-600">
              {completedCount}/{questions.length} completed
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div 
              className="bg-gradient-to-r from-blue-500 to-purple-500 h-3 rounded-full transition-all duration-500 ease-out"
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>
          <p className="text-xs text-gray-500 mt-1">
            {Math.round(progressPercentage)}% complete
          </p>
        </div>
      </div>

      {/* Challenge Grid */}
      <div className="grid gap-6 md:grid-cols-2">
        {questions.map((question, index) => {
          const isCompleted = progress[index];
          return (
            <div
              key={index}
              onClick={() => onQuestionSelect(index)}
              className={`group cursor-pointer p-6 rounded-xl border-2 transition-all duration-300 hover:shadow-lg hover:scale-[1.02] ${
                isCompleted 
                  ? 'border-green-200 bg-green-50 hover:border-green-300' 
                  : 'border-gray-200 bg-white hover:border-blue-300'
              }`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className={`flex items-center justify-center w-8 h-8 rounded-lg font-semibold text-sm ${
                    isCompleted 
                      ? 'bg-green-100 text-green-700' 
                      : 'bg-blue-100 text-blue-700'
                  }`}>
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {question.title}
                    </h3>
                  </div>
                </div>
                
                <div className="flex items-center space-x-2">
                  {isCompleted ? (
                    <CheckCircle className="h-6 w-6 text-green-500" />
                  ) : (
                    <Circle className="h-6 w-6 text-gray-300 group-hover:text-blue-400 transition-colors" />
                  )}
                </div>
              </div>
              
              <p className="text-gray-600 mb-4 leading-relaxed">
                {question.description}
              </p>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-1 text-sm text-gray-500">
                    <Code className="h-4 w-4" />
                    <span>{question.difficulty}</span>
                  </div>
                  <div className="flex items-center space-x-1 text-sm text-gray-500">
                    <Clock className="h-4 w-4" />
                    <span>~{question.estimatedTime} min</span>
                  </div>
                </div>
                
                <div className="text-sm font-medium text-blue-600 group-hover:text-blue-700 transition-colors">
                  {isCompleted ? 'Review →' : 'Start →'}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Completion Message with Certificate */}
      {allCompleted && (
        <div className="mt-12 text-center p-8 bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl border border-green-200">
          <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="h-8 w-8 text-white" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            Congratulations! 🎉
          </h3>
          <p className="text-gray-600 mb-6">
            You've completed all 25 JavaScript challenges! You're well on your way to mastering JavaScript fundamentals.
          </p>
          
          <button
            onClick={() => setShowCertificateModal(true)}
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-8 py-4 rounded-xl font-semibold hover:from-yellow-600 hover:to-orange-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <Award className="h-6 w-6" />
            <span>Get Your Certificate</span>
          </button>
          
          <p className="text-sm text-gray-500 mt-3">
            Download a professional certificate to showcase your JavaScript skills
          </p>
        </div>
      )}

      {/* Certificate Modal */}
      <CertificateModal
        isOpen={showCertificateModal}
        onClose={() => setShowCertificateModal(false)}
      />
    </div>
  );
};

export default QuestionList;