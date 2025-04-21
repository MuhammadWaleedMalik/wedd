import React, { useState } from 'react';
import { useGroq } from '../../hooks/useGroq';  // Import your custom hook

const WeddingTextGenerator = () => {
  const colors = {
    primary: "#836F57",       // Main brown color
    secondary: "#F3E9D8",     // Light cream
    accent: "#FFFFFF",        // White
    background: "#5c5b5b",    // Dark gray background
    textLight: "#F8F9FA"      // Very light text
  };

  const [formData, setFormData] = useState({
    names: "",
    date: "",
    time: "",
    location: "",
    rsvpDate: "",
    dressCode: "",
    additionalNotes: ""
  });
  const [isGenerating, setIsGenerating] = useState(false);
  const [invitationText, setInvitationText] = useState("");
  const [error, setError] = useState("");

  const { fetchGroqResponse, response, loading, error: groqError } = useGroq();  // Call your hook here

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const generateText = async () => {
    if (!formData.names.trim()) {
      setError("Please at least enter the couple's names");
      return;
    }

    setError("");
    setIsGenerating(true);

    // Call your custom hook to fetch the generated response
    try {
      await fetchGroqResponse("wedding", `Generate a wedding invitation for ${formData.names} on ${formData.date} at ${formData.location}.`);
      
      // Once you have the response from the hook, set the invitation text
      setInvitationText(response || "No invitation text generated.");
    } catch (err) {
      setError(groqError || "An error occurred");
    } finally {
      setIsGenerating(false);
    }
  };

  const downloadText = () => {
    const element = document.createElement('a');
    const file = new Blob([invitationText], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = 'wedding-invitation.txt';
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
            Wedding Invitation Text Generator
          </h1>
          <p style={{ color: colors.secondary }}>
            Craft the perfect wording for your special day
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
            <li>Fill in the details about your wedding</li>
            <li>Click "Generate Text"</li>
            <li>Copy or download your perfect invitation wording</li>
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
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
            <div>
              <label className="block mb-1 font-medium">Date</label>
              <input
                type="text"
                name="date"
                value={formData.date}
                onChange={handleChange}
                placeholder="Saturday, June 15, 2025"
                className="w-full px-3 py-2 border rounded"
                style={{ 
                  backgroundColor: colors.accent,
                  borderColor: colors.primary
                }}
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">Time</label>
              <input
                type="text"
                name="time"
                value={formData.time}
                onChange={handleChange}
                placeholder="4:00 in the afternoon"
                className="w-full px-3 py-2 border rounded"
                style={{ 
                  backgroundColor: colors.accent,
                  borderColor: colors.primary
                }}
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">Location</label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                placeholder="Sunset Gardens, 123 Main St"
                className="w-full px-3 py-2 border rounded"
                style={{ 
                  backgroundColor: colors.accent,
                  borderColor: colors.primary
                }}
              />
            </div>
          </div>

          {/* Remaining Form Fields */}
          {/* ... similar to your existing code */}

          {error && <p className="text-red-600 mb-3">{error}</p>}

          <button
            onClick={generateText}
            disabled={isGenerating}
            className="w-full py-3 rounded font-medium transition-colors"
            style={{ 
              backgroundColor: isGenerating ? `${colors.primary}80` : colors.primary,
              color: colors.textLight
            }}
          >
            {isGenerating ? "Generating..." : "Generate Invitation Text"}
          </button>
        </div>

        {/* Results */}
        {invitationText && (
          <div 
            className="p-6 rounded-lg"
            style={{ 
              backgroundColor: colors.secondary,
              color: colors.primary
            }}
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Your Invitation Text</h2>
              <button
                onClick={downloadText}
                className="px-4 py-2 rounded font-medium"
                style={{ 
                  backgroundColor: colors.primary,
                  color: colors.textLight
                }}
              >
                Download Text
              </button>
            </div>

            <div 
              className="p-6 whitespace-pre-line text-center leading-relaxed"
              style={{ 
                backgroundColor: colors.accent,
                border: `1px solid ${colors.primary}`
              }}
            >
              {invitationText}
            </div>

            <div className="mt-4 text-sm italic" style={{ color: colors.primary }}>
              <p>Feel free to edit this text to make it perfect for your wedding!</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default WeddingTextGenerator;
