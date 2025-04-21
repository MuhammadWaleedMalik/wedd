import React, { useState } from 'react';
import { useGroq } from '../../hooks/useGroq'; // Adjust the path if needed

const InvitationGenerator = () => {
  const [prompt, setPrompt] = useState('');
  const [error, setError] = useState('');

  const {
    fetchGroqResponse,
    response,
    loading,
    error: aiError,
  } = useGroq();

  const generateInvitation = async () => {
    if (!prompt.trim()) {
      setError('Please enter some details for your invitation');
      return;
    }

    setError('');
    await fetchGroqResponse('Generate a wedding invitation for:', prompt);
  };

  const downloadInvitation = () => {
    if (!response) return;

    const element = document.createElement('a');
    const file = new Blob([response], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = 'wedding-invitation.txt';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-rose-100 to-teal-100 flex items-center justify-center pt-10 p-6">
      <div className="max-w-2xl w-full bg-white p-8 rounded-xl shadow-lg">
        <h1 className="text-3xl font-extrabold text-center mb-6 text-gray-800">
          Wedding Invitation Generator 💌
        </h1>

        <textarea
          rows={4}
          className="w-full p-4 border text-black rounded-md resize-none mb-4"
          placeholder="Describe your wedding details: names, venue, date, etc..."
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />

        {(error || aiError) && (
          <p className="mb-2 text-sm text-red-500">{error || aiError}</p>
        )}

        <button
          onClick={generateInvitation}
          disabled={loading}
          className="w-full bg-pink-600 hover:bg-pink-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300 disabled:opacity-50"
        >
          {loading ? 'Generating...' : 'Generate Invitation'}
        </button>

        {response && (
          <div className="mt-6 bg-white p-6 rounded-lg shadow-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-3 text-gray-700">
              Your Invitation
            </h3>
            <p className="whitespace-pre-line text-gray-800">{response}</p>

            <button
              onClick={downloadInvitation}
              className="mt-4 px-4 py-2 bg-green-700 hover:bg-green-800 text-white rounded transition"
            >
              Download Invitation
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default InvitationGenerator;
