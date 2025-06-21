import React, { useState } from 'react';
import { User, Award } from 'lucide-react';
import Certificate from './Certificate';

interface CertificateModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CertificateModal: React.FC<CertificateModalProps> = ({ isOpen, onClose }) => {
  const [userName, setUserName] = useState('');
  const [showCertificate, setShowCertificate] = useState(false);

  if (!isOpen) return null;

  const handleGenerateCertificate = () => {
    if (userName.trim()) {
      setShowCertificate(true);
    }
  };

  const handleCloseCertificate = () => {
    setShowCertificate(false);
    setUserName('');
    onClose();
  };

  const handleDownload = () => {
    // Certificate download is handled in Certificate component
  };

  const currentDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  if (showCertificate) {
    return (
      <Certificate
        userName={userName}
        completionDate={currentDate}
        onClose={handleCloseCertificate}
        onDownload={handleDownload}
      />
    );
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <Award className="h-8 w-8 text-white" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Generate Your Certificate</h2>
          <p className="text-gray-600">
            Congratulations on completing all 25 JavaScript challenges! 
            Enter your name to generate your certificate of completion.
          </p>
        </div>

        <div className="space-y-6">
          <div>
            <label htmlFor="userName" className="block text-sm font-medium text-gray-700 mb-2">
              Your Full Name
            </label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                id="userName"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                placeholder="Enter your full name"
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                onKeyPress={(e) => e.key === 'Enter' && handleGenerateCertificate()}
              />
            </div>
          </div>

          <div className="flex space-x-4">
            <button
              onClick={handleGenerateCertificate}
              disabled={!userName.trim()}
              className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Generate Certificate
            </button>
            <button
              onClick={onClose}
              className="flex-1 border border-gray-300 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
          </div>
        </div>

        <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
          <h3 className="text-sm font-semibold text-blue-900 mb-2">What you'll get:</h3>
          <ul className="text-sm text-blue-800 space-y-1">
            <li>• Professional certificate of completion</li>
            <li>• Downloadable high-quality image</li>
            <li>• Recognition of JavaScript skills mastered</li>
            <li>• Perfect for portfolios and LinkedIn</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CertificateModal;