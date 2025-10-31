import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-4">About Me</h1>
      <p className="text-lg text-gray-700 max-w-2xl text-center">
        I am a computer science student with a passion for developing innovative solutions...
      </p>
    </div>
  );
};

export default AboutPage;