'use client'
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

const GenerateCartoonPage: React.FC = () => {
  const router = useRouter();
  const [prompt, setPrompt] = useState<string | null>(null);

  useEffect(() => {
    // Get the prompt from the URL query string
    const urlParams = new URLSearchParams(window.location.search);
    const prompt = urlParams.get('prompt');
    setPrompt(prompt);
  }, []);

  if (!prompt) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100">
      <div className="w-full max-w-2xl bg-white shadow-lg rounded-lg p-8 mt-10">
        <h2 className="text-2xl lg:text-3xl font-bold mb-4">Generating Cartoon</h2>
        <p className="text-lg lg:text-xl mb-6">{prompt}</p>
        <video controls className="w-full rounded-lg">
          <source src="/out.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <button
          onClick={() => router.back()}
          className="mt-8 bg-blue-500 text-white px-4 py-2 rounded-full"
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default GenerateCartoonPage;
