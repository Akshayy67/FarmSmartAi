import React from "react";
import { Users, Target, Award } from "lucide-react";

// Import images
import akshayImage from "../images/akshay.jpg";
import ashruthImage from "../images/WhatsApp Image 2025-03-12 at 19.42.40_036d0781.jpg";
import rohithImage from "../images/rohith.jpg";

const About = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-green-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              About FarmSmart AI
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're revolutionizing farming with technology for sustainability and profitability.
              Our mission is to empower farmers with AI-driven solutions that make agriculture
              smarter, more efficient, and more productive.
            </p>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Target className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Our Mission</h3>
              <p className="text-gray-600">
                To transform agriculture through innovative AI technology, making sustainable
                farming accessible to everyone.
              </p>
            </div>
            <div className="text-center">
              <Users className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Our Team</h3>
              <p className="text-gray-600">
                A dedicated group of agricultural experts, AI specialists, and technology
                innovators working together to revolutionize farming.
              </p>
            </div>
            <div className="text-center">
              <Award className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Our Impact</h3>
              <p className="text-gray-600">
                Helping thousands of farmers increase yields, reduce costs, and adopt
                sustainable practices through smart technology.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Meet Our Leadership Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Akshay Juluri",
                image: akshayImage, // Imported image
              },
              {
                name: "Ashruth P",
                image: ashruthImage, // Imported image
              },
              {
                name: "Rohith Reddy k",
                image: rohithImage, // Imported image
              },
            ].map((member) => (
              <div key={member.name} className="text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  {member.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
