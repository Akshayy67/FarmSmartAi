import React from 'react';
import { Camera, MapPin, MessageSquare, BarChart3, Cloud, Download, Globe, Shield } from 'lucide-react';

const Features = () => {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Powerful Features for Modern Farming
          </h1>
          <p className="text-xl text-gray-600 mb-12">
            Discover how FarmSmart AI revolutionizes agriculture with cutting-edge technology
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
          {/* AI Disease Detection */}
          <div className="bg-green-50 rounded-xl p-8">
            <Camera className="h-12 w-12 text-green-600 mb-6" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">AI Disease Detection</h3>
            <p className="text-gray-600 mb-4">
              Point your camera at any crop to instantly identify diseases and get expert treatment recommendations.
              Our AI model is trained on millions of plant images for accurate diagnosis.
            </p>
            <ul className="space-y-2 text-gray-600">
              <li>• Real-time disease identification</li>
              <li>• Treatment recommendations</li>
              <li>• Disease progression tracking</li>
              <li>• Offline detection capabilities</li>
            </ul>
          </div>

          {/* GPS Services */}
          <div className="bg-green-50 rounded-xl p-8">
            <MapPin className="h-12 w-12 text-green-600 mb-6" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">GPS-Based Services</h3>
            <p className="text-gray-600 mb-4">
              Connect with local agricultural services and markets based on your location.
              Find equipment rentals, expert consultations, and buyers for your produce.
            </p>
            <ul className="space-y-2 text-gray-600">
              <li>• Local market connections</li>
              <li>• Equipment rental locations</li>
              <li>• Expert consultant finder</li>
              <li>• Transportation services</li>
            </ul>
          </div>

          {/* Smart Chatbot */}
          <div className="bg-green-50 rounded-xl p-8">
            <MessageSquare className="h-12 w-12 text-green-600 mb-6" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Smart Chatbot</h3>
            <p className="text-gray-600 mb-4">
              Get instant answers to your farming questions 24/7. Our AI chatbot provides
              expert advice on crop management, disease control, and best practices.
            </p>
            <ul className="space-y-2 text-gray-600">
              <li>• 24/7 farming assistance</li>
              <li>• Multilingual support</li>
              <li>• Personalized advice</li>
              <li>• Voice interaction</li>
            </ul>
          </div>

          {/* Predictive Analytics */}
          <div className="bg-green-50 rounded-xl p-8">
            <BarChart3 className="h-12 w-12 text-green-600 mb-6" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Predictive Analytics</h3>
            <p className="text-gray-600 mb-4">
              Make data-driven decisions with our advanced analytics. Forecast crop yields,
              predict market trends, and optimize your farming operations.
            </p>
            <ul className="space-y-2 text-gray-600">
              <li>• Yield predictions</li>
              <li>• Market trend analysis</li>
              <li>• Resource optimization</li>
              <li>• Risk assessment</li>
            </ul>
          </div>

          {/* Weather Integration */}
          <div className="bg-green-50 rounded-xl p-8">
            <Cloud className="h-12 w-12 text-green-600 mb-6" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Weather Integration</h3>
            <p className="text-gray-600 mb-4">
              Stay ahead of weather changes with real-time updates and alerts. Plan your
              farming activities based on accurate weather forecasts.
            </p>
            <ul className="space-y-2 text-gray-600">
              <li>• Real-time weather updates</li>
              <li>• Severe weather alerts</li>
              <li>• Seasonal forecasts</li>
              <li>• Climate analysis</li>
            </ul>
          </div>

          {/* Offline Mode */}
          <div className="bg-green-50 rounded-xl p-8">
            <Download className="h-12 w-12 text-green-600 mb-6" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Offline Mode</h3>
            <p className="text-gray-600 mb-4">
              Access critical features even without internet connectivity. Keep working
              in remote areas with limited network coverage.
            </p>
            <ul className="space-y-2 text-gray-600">
              <li>• Offline disease detection</li>
              <li>• Cached data access</li>
              <li>• Local storage</li>
              <li>• Auto-sync when online</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;