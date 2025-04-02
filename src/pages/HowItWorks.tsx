import React from 'react';
import { Camera, Zap, MessageSquare, Check } from 'lucide-react';

const HowItWorks = () => {
  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            How FarmSmart AI Works
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get started with FarmSmart AI in just a few simple steps. Our intuitive
            process makes it easy to leverage AI technology for your farming needs.
          </p>
        </div>

        {/* Steps Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {/* Step 1: Take a Photo */}
          <div className="relative">
            <div className="bg-green-50 rounded-xl p-8">
              <div className="flex items-center mb-6">
                <div className="bg-green-600 text-white rounded-full w-10 h-10 flex items-center justify-center mr-4">
                  1
                </div>
                <Camera className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Take a Photo</h3>
              <p className="text-gray-600">
                Simply point your smartphone camera at any crop or plant you want to analyze.
                Our app works with all types of crops and can capture images even in varying
                light conditions.
              </p>
            </div>
          </div>

          {/* Step 2: Get Instant Analysis */}
          <div className="relative">
            <div className="bg-green-50 rounded-xl p-8">
              <div className="flex items-center mb-6">
                <div className="bg-green-600 text-white rounded-full w-10 h-10 flex items-center justify-center mr-4">
                  2
                </div>
                <Zap className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Get Instant Analysis</h3>
              <p className="text-gray-600">
                Our AI immediately analyzes the image to identify any diseases, nutrient
                deficiencies, or other issues. You'll receive accurate results within seconds.
              </p>
            </div>
          </div>

          {/* Step 3: Receive Recommendations */}
          <div className="relative">
            <div className="bg-green-50 rounded-xl p-8">
              <div className="flex items-center mb-6">
                <div className="bg-green-600 text-white rounded-full w-10 h-10 flex items-center justify-center mr-4">
                  3
                </div>
                <MessageSquare className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Receive Recommendations</h3>
              <p className="text-gray-600">
                Based on the analysis, you'll get personalized recommendations for treatment,
                prevention, and optimal crop management practices.
              </p>
            </div>
          </div>

          {/* Step 4: Take Action */}
          <div className="relative">
            <div className="bg-green-50 rounded-xl p-8">
              <div className="flex items-center mb-6">
                <div className="bg-green-600 text-white rounded-full w-10 h-10 flex items-center justify-center mr-4">
                  4
                </div>
                <Check className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Take Action</h3>
              <p className="text-gray-600">
                Follow the recommended actions to treat issues and improve crop health.
                Track progress over time and get continuous support from our AI system.
              </p>
            </div>
          </div>
        </div>

        {/* Demo Video Section */}
        <div className="bg-gray-50 rounded-xl p-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">See It In Action</h2>
          <p className="text-gray-600 mb-8">
            Watch our demo video to see how FarmSmart AI helps farmers around the world.
          </p>
          <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg">
            {/* Placeholder for video - in production, replace with actual video embed */}
            <div className="flex items-center justify-center h-full">
              <p className="text-gray-500">Demo Video Coming Soon</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;