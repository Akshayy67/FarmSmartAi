import React from 'react';
import { Smartphone, Laptop, Shield, Zap } from 'lucide-react';

const Download = () => {
  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Download FarmSmart AI
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get started with FarmSmart AI today and transform your farming practices
            with the power of artificial intelligence.
          </p>
        </div>

        {/* Download Options */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Mobile App */}
          <div className="bg-green-50 rounded-xl p-8 text-center">
            <Smartphone className="h-16 w-16 text-green-600 mx-auto mb-6" />
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Mobile App</h2>
            <p className="text-gray-600 mb-8">
              Download our mobile app for iOS and Android devices to access
              FarmSmart AI features on the go.
            </p>
            <div className="space-y-4">
              <button className="w-full bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors">
                Download on the App Store
              </button>
              <button className="w-full bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors">
                Get it on Google Play
              </button>
            </div>
          </div>

          {/* Desktop Version */}
          <div className="bg-green-50 rounded-xl p-8 text-center">
            <Laptop className="h-16 w-16 text-green-600 mx-auto mb-6" />
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Web Version</h2>
            <p className="text-gray-600 mb-8">
              Access FarmSmart AI through your web browser for a complete
              farming management experience.
            </p>
            <button className="w-full bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors">
              Launch Web App
            </button>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex items-start space-x-4">
            <Shield className="h-8 w-8 text-green-600 flex-shrink-0" />
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Secure & Private
              </h3>
              <p className="text-gray-600">
                Your data is protected with enterprise-grade security and encryption.
                We never share your information without your consent.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <Zap className="h-8 w-8 text-green-600 flex-shrink-0" />
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Fast & Reliable
              </h3>
              <p className="text-gray-600">
                Our app is optimized for performance and works reliably even in
                areas with limited connectivity.
              </p>
            </div>
          </div>
        </div>

        {/* System Requirements */}
        <div className="mt-16 bg-gray-50 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            System Requirements
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Mobile Requirements
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>• iOS 13.0 or later</li>
                <li>• Android 8.0 or later</li>
                <li>• 100MB free space</li>
                <li>• Camera access required</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Web Requirements
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Modern web browser</li>
                <li>• Chrome, Firefox, Safari, or Edge</li>
                <li>• Internet connection</li>
                <li>• WebGL support for advanced features</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Download;