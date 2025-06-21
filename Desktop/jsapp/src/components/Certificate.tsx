import React, { useRef } from 'react';
import { Download, Award, Calendar, CheckCircle, X } from 'lucide-react';

interface CertificateProps {
  userName: string;
  completionDate: string;
  onClose: () => void;
  onDownload: () => void;
}

const Certificate: React.FC<CertificateProps> = ({ 
  userName, 
  completionDate, 
  onClose, 
  onDownload 
}) => {
  const certificateRef = useRef<HTMLDivElement>(null);

  const handleDownload = () => {
    if (certificateRef.current) {
      // Create a canvas to convert the certificate to image
      import('html2canvas').then((html2canvas) => {
        html2canvas.default(certificateRef.current!, {
          scale: 2,
          backgroundColor: '#ffffff',
          width: 800,
          height: 600
        }).then((canvas) => {
          const link = document.createElement('a');
          link.download = `JavaScript-Certificate-${userName.replace(/\s+/g, '-')}.png`;
          link.href = canvas.toDataURL();
          link.click();
        });
      });
    }
    onDownload();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
              <Award className="h-6 w-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Certificate of Completion</h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Certificate Content */}
        <div className="p-8">
          <div 
            ref={certificateRef}
            className="relative bg-gradient-to-br from-blue-50 via-white to-purple-50 border-8 border-double border-yellow-400 rounded-2xl p-12 text-center shadow-2xl overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, #f0f9ff 0%, #ffffff 50%, #faf5ff 100%)',
              border: '8px double #FFD700',
              boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.15)',
            }}
          >
            {/* Gold Ribbon */}
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 z-10">
              <div className="w-48 h-10 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-b-2xl flex items-center justify-center shadow-lg border-x-4 border-yellow-700">
                <span className="text-lg font-bold text-white tracking-widest drop-shadow">AWARD</span>
              </div>
            </div>
            {/* Decorative Elements */}
            <div className="absolute top-4 left-4 w-16 h-16 bg-gradient-to-br from-yellow-300 to-orange-400 rounded-full opacity-20"></div>
            <div className="absolute top-8 right-8 w-12 h-12 bg-gradient-to-br from-blue-300 to-purple-400 rounded-full opacity-20"></div>
            <div className="absolute bottom-4 left-8 w-20 h-20 bg-gradient-to-br from-green-300 to-blue-400 rounded-full opacity-20"></div>
            <div className="absolute bottom-8 right-4 w-14 h-14 bg-gradient-to-br from-purple-300 to-pink-400 rounded-full opacity-20"></div>

            {/* Certificate Header */}
            <div className="mb-8">
              <div className="w-20 h-20 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Award className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                Certificate of Achievement
              </h1>
              <p className="text-lg text-gray-600">JavaScript Programming Fundamentals</p>
            </div>

            {/* Main Content */}
            <div className="mb-8">
              <p className="text-lg text-gray-700 mb-4">This is to certify that</p>
              <h2 className="text-3xl font-bold text-gray-900 mb-4 border-b-2 border-gray-300 pb-2 inline-block">
                {userName}
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                has successfully completed all <span className="font-bold text-blue-600">25 JavaScript challenges</span>
                <br />
                and demonstrated proficiency in JavaScript programming fundamentals
              </p>
            </div>

            {/* Skills Achieved */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Skills Mastered</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-sm">
                {[
                  'Variables & Data Types',
                  'Control Structures',
                  'Functions & Methods',
                  'Array Operations',
                  'String Manipulation',
                  'Object Handling',
                  'Mathematical Operations',
                  'Problem Solving',
                  'Code Debugging'
                ].map((skill, index) => (
                  <div key={index} className="flex items-center space-x-2 bg-white bg-opacity-50 px-3 py-2 rounded-lg">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-gray-700">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between pt-8 border-t border-gray-300 mt-8">
              {/* Signature Area */}
              <div className="text-left flex flex-col items-start">
                <div className="flex items-center space-x-2 text-gray-600 mb-2">
                  <Calendar className="h-4 w-4" />
                  <span className="text-sm">Completed on {completionDate}</span>
                </div>
                <div className="mt-6">
                  <span className="block text-xs text-gray-500 mb-1">Instructor Signature</span>
                  <span className="block w-32 h-8 border-b-2 border-gray-400"></span>
                  <span className="block text-xs text-gray-400 mt-1">JS Learning Hub</span>
                </div>
              </div>
              <div className="text-right">
                <div className="w-24 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-2 shadow-md">
                  <span className="text-white font-bold text-xs tracking-widest">VERIFIED</span>
                </div>
                <p className="text-xs text-gray-500">Certificate ID: JS-{Date.now()}</p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center justify-center space-x-4 mt-8">
            <button
              onClick={handleDownload}
              className="flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              <Download className="h-5 w-5" />
              <span>Download Certificate</span>
            </button>
            <button
              onClick={onClose}
              className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
            >
              Close
            </button>
          </div>

          {/* Congratulations Message */}
          <div className="mt-8 bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-lg p-6 text-center">
            <h3 className="text-xl font-bold text-gray-900 mb-2">🎉 Congratulations!</h3>
            <p className="text-gray-700">
              You've successfully mastered JavaScript fundamentals! This certificate recognizes your dedication 
              and achievement in completing all 25 programming challenges. Keep coding and continue your journey 
              in web development!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certificate;