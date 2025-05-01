import React from 'react';

const About = () => {
  return (

    <div className='min-h-screen bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200'>
      <div className="p-6 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">About Us</h1>

        <p className="text-lg mb-4">
          Welcome to our blog! We are a group of passionate writers sharing insightful articles on various topics. Our goal is to provide value, information, and inspiration to our readers through well-researched and engaging content.
        </p>

        <p className="text-lg mb-4">
          Whether you’re interested in technology, lifestyle, health, or current events, we cover a wide range of topics to keep you informed and entertained. Join us on our journey as we continue to share knowledge and foster a community of curious minds.
        </p>

        <h2 className="text-2xl font-semibold mt-6">Our Mission</h2>
        <p className="text-lg">
          Our mission is to create a platform where readers can find high-quality articles that are both informative and engaging. We aim to spark conversations, challenge ideas, and encourage lifelong learning.
        </p>

        <h2 className="text-2xl font-semibold mt-6">Get In Touch</h2>
        <p className="text-lg mb-4">
          If you have any questions, feedback, or want to collaborate with us, feel free to reach out! You can contact us through the contact page or follow us on social media.
        </p>
      </div>
    </div>
    
  );
};

export default About;