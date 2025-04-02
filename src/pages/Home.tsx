import React from 'react';
import { Link } from 'react-router-dom';
import { Camera, MapPin, MessageSquare, BarChart3, Cloud, Download } from 'lucide-react';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Empower Your Farm with AI-Driven Solutions
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Transform your farming practices with real-time crop disease detection, personalized recommendations, and smart analytics.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/download"
                  className="bg-green-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-green-700 transition-colors"
                >
                  Download Now
                </Link>
                <Link
                  to="/how-it-works"
                  className="bg-white text-green-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-green-50 transition-colors border border-green-600"
                >
                  Learn More
                </Link>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                alt="Farmer using smartphone in field"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Key Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Camera className="h-8 w-8 text-green-600" />}
              title="AI Disease Detection"
              description="Instantly identify crop diseases using your smartphone camera and get treatment recommendations."
            />
            <FeatureCard
              icon={<MapPin className="h-8 w-8 text-green-600" />}
              title="GPS-Based Services"
              description="Connect with nearby agricultural services, equipment rentals, and markets."
            />
            <FeatureCard
              icon={<MessageSquare className="h-8 w-8 text-green-600" />}
              title="Smart Chatbot"
              description="Get instant answers to farming questions and expert advice 24/7."
            />
            <FeatureCard
              icon={<BarChart3 className="h-8 w-8 text-green-600" />}
              title="Predictive Analytics"
              description="Forecast crop yields and market trends using advanced AI algorithms."
            />
            <FeatureCard
              icon={<Cloud className="h-8 w-8 text-green-600" />}
              title="Weather Integration"
              description="Access real-time weather updates and alerts for better planning."
            />
            <FeatureCard
              icon={<Download className="h-8 w-8 text-green-600" />}
              title="Offline Mode"
              description="Access critical features even without internet connectivity."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-green-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Transform Your Farm?
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Join thousands of farmers already using FarmSmart AI to improve their yields and profitability.
          </p>
          <Link
            to="/download"
            className="bg-white text-green-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-green-50 transition-colors inline-block"
          >
            Get Started Today
          </Link>
        </div>
      </section>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default Home;