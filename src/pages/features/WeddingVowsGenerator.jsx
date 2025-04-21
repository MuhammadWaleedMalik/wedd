import React, { useState } from 'react';
import { useGroq } from '../../hooks/useGroq'; // Import the useGroq hook

const WeddingVowsGenerator = () => {
  const colors = {
    primary: "#836F57",
    secondary: "#F3E9D8",
    accent: "#FFFFFF",
    background: "#5c5b5b",
    textLight: "#F8F9FA"
  };

  const [formData, setFormData] = useState({
    names: "",
    tone: "",
    specialMemories: "",
    promises: ""
  });

  const [isGenerating, setIsGenerating] = useState(false);
  const [vowsText, setVowsText] = useState("");
  const [error, setError] = useState("");

  const { fetchGroqResponse, response, loading, error: groqError } = useGroq(); // Using the hook

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const generateVows = () => {
    if (!formData.names.trim()) {
      setError("Please enter both names.");
      return;
    }

    setError("");
    setIsGenerating(true);

    // Fetch response using the groq hook
    fetchGroqResponse('generate wedding vows', JSON.stringify(formData)).then(() => {
      if (response) {
        setVowsText(response);
      }
      setIsGenerating(false);
    }).catch((err) => {
      setError(groqError || err.message);
      setIsGenerating(false);
    });
  };

  const downloadVows = () => {
    const element = document.createElement('a');
    const file = new Blob([vowsText], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = 'wedding-vows.txt';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div
      className="min-h-screen mt-12 p-6 font-serif"
      style={{ backgroundColor: colors.background }}
    >
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1
            className="text-3xl font-bold mb-2 tracking-wide"
            style={{ color: colors.textLight }}
          >
            AI Wedding Vows Generator
          </h1>
          <p style={{ color: colors.secondary }}>
            Create meaningful, personalized vows for your big day
          </p>
        </div>

        {/* How to Use */}
        <div
          className="p-6 rounded-lg mb-8"
          style={{
            backgroundColor: colors.primary,
            color: colors.textLight
          }}
        >
          <h2 className="text-xl font-semibold mb-3">How to Use:</h2>
          <ol className="list-decimal pl-5 space-y-2">
            <li>Fill in the details below</li>
            <li>Click "Generate Vows"</li>
            <li>Copy or download your personalized vows</li>
          </ol>
        </div>

        {/* Form */}
        <div
          className="p-6 rounded-lg mb-6"
          style={{
            backgroundColor: colors.secondary,
            color: colors.primary
          }}
        >
          <div className="mb-4">
            <label className="block mb-1 font-medium">Couple's Names*</label>
            <input
              type="text"
              name="names"
              value={formData.names}
              onChange={handleChange}
              placeholder="Alex and Taylor"
              className="w-full px-3 py-2 border rounded"
              style={{
                backgroundColor: colors.accent,
                borderColor: colors.primary
              }}
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1 font-medium">Tone</label>
            <input
              type="text"
              name="tone"
              value={formData.tone}
              onChange={handleChange}
              placeholder="romantic, heartfelt, lighthearted"
              className="w-full px-3 py-2 border rounded"
              style={{
                backgroundColor: colors.accent,
                borderColor: colors.primary
              }}
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1 font-medium">Special Memories</label>
            <textarea
              name="specialMemories"
              value={formData.specialMemories}
              onChange={handleChange}
              rows={2}
              placeholder="Our first date at the beach, that road trip to the mountains..."
              className="w-full px-3 py-2 border rounded"
              style={{
                backgroundColor: colors.accent,
                borderColor: colors.primary
              }}
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1 font-medium">Promises</label>
            <textarea
              name="promises"
              value={formData.promises}
              onChange={handleChange}
              rows={2}
              placeholder="always support your dreams, be your best friend..."
              className="w-full px-3 py-2 border rounded"
              style={{
                backgroundColor: colors.accent,
                borderColor: colors.primary
              }}
            />
          </div>

          {error && <p className="text-red-600 mb-3">{error}</p>}

          <button
            onClick={generateVows}
            disabled={isGenerating}
            className="w-full py-3 rounded font-medium transition-colors"
            style={{
              backgroundColor: isGenerating ? `${colors.primary}80` : colors.primary,
              color: colors.textLight
            }}
          >
            {isGenerating ? "Generating..." : "Generate Vows"}
          </button>
        </div>

        {/* Results */}
        {vowsText && (
          <div
            className="p-6 rounded-lg"
            style={{
              backgroundColor: colors.secondary,
              color: colors.primary
            }}
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Your Wedding Vows</h2>
              <button
                onClick={downloadVows}
                className="px-4 py-2 rounded font-medium"
                style={{
                  backgroundColor: colors.primary,
                  color: colors.textLight
                }}
              >
                Download Vows
              </button>
            </div>

            <div
              className="p-6 whitespace-pre-line text-center leading-relaxed"
              style={{
                backgroundColor: colors.accent,
                border: `1px solid ${colors.primary}`
              }}
            >
              {vowsText}
            </div>

            <div className="mt-4 text-sm italic" style={{ color: colors.primary }}>
              <p>Feel free to personalize these vows for your special moment!</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default WeddingVowsGenerator;
