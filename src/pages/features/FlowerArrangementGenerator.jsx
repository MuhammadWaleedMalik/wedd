import React, { useState } from 'react';
import { useImage } from '../../hooks/useImage'; // Import the useImage hook

const FlowerArrangementGenerator = () => {
  const colors = {
    primary: "#836F57",
    secondary: "#F3E9D8",
    accent: "#FFFFFF",
    background: "#5c5b5b",
    textLight: "#F8F9FA"
  };

  const [formData, setFormData] = useState({
    occasion: "",
    preferredColors: "",
    favoriteFlowers: "",
    arrangementStyle: ""
  });

  const [isGenerating, setIsGenerating] = useState(false);
  const [arrangementText, setArrangementText] = useState("");
  const [error, setError] = useState("");
  
  // Use the useImage hook to generate the image
  const { imageUrl, generateImage, loading, error: imageError } = useImage();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const generateArrangement = async () => {
    if (!formData.occasion.trim()) {
      setError("Please enter the occasion.");
      return;
    }

    setError("");
    setIsGenerating(true);

    setTimeout(() => {
      const { occasion, preferredColors, favoriteFlowers, arrangementStyle } = formData;

      const generatedArrangement = `
        🎕 AI-Recommended Flower Arrangement 🎕
        
        Occasion: ${occasion}

        ${preferredColors ? `Preferred Colors: ${preferredColors}` : ""}
        ${favoriteFlowers ? `Favorite Flowers: ${favoriteFlowers}` : ""}
        ${arrangementStyle ? `Arrangement Style: ${arrangementStyle}` : ""}
        
        🌸 Arrangement Idea:
        For this beautiful ${occasion}, create a bouquet with a harmonious blend of ${preferredColors || "soft pastels and rich tones"}. Include stunning blooms like ${favoriteFlowers || "roses, peonies, and lilies"}, arranged in a ${arrangementStyle || "romantic, cascading style"}. Accentuate with fresh greenery, baby's breath, and elegant wrapping to make it truly unforgettable.

        💐 A perfect choice to brighten the moment!
      `.replace(/^\s+/gm, '');

      setArrangementText(generatedArrangement);
      
      // Generate the image after the arrangement text is generated
      generateImage(generatedArrangement);

      setIsGenerating(false);
    }, 1000);
  };

  const downloadArrangement = () => {
    const element = document.createElement('a');
    const file = new Blob([arrangementText], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = 'flower-arrangement.txt';
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
            AI Flower Arrangement Generator
          </h1>
          <p style={{ color: colors.secondary }}>
            Get customized, AI-inspired flower arrangement ideas
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
            <li>Click "Generate Arrangement"</li>
            <li>Copy or download your floral design idea</li>
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
            <label className="block mb-1 font-medium">Occasion*</label>
            <input
              type="text"
              name="occasion"
              value={formData.occasion}
              onChange={handleChange}
              placeholder="Wedding, Birthday, Anniversary"
              className="w-full px-3 py-2 border rounded"
              style={{
                backgroundColor: colors.accent,
                borderColor: colors.primary
              }}
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1 font-medium">Preferred Colors</label>
            <input
              type="text"
              name="preferredColors"
              value={formData.preferredColors}
              onChange={handleChange}
              placeholder="blush pink, ivory, deep red"
              className="w-full px-3 py-2 border rounded"
              style={{
                backgroundColor: colors.accent,
                borderColor: colors.primary
              }}
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1 font-medium">Favorite Flowers</label>
            <input
              type="text"
              name="favoriteFlowers"
              value={formData.favoriteFlowers}
              onChange={handleChange}
              placeholder="roses, peonies, lilies"
              className="w-full px-3 py-2 border rounded"
              style={{
                backgroundColor: colors.accent,
                borderColor: colors.primary
              }}
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1 font-medium">Arrangement Style</label>
            <input
              type="text"
              name="arrangementStyle"
              value={formData.arrangementStyle}
              onChange={handleChange}
              placeholder="romantic, modern, rustic"
              className="w-full px-3 py-2 border rounded"
              style={{
                backgroundColor: colors.accent,
                borderColor: colors.primary
              }}
            />
          </div>

          {error && <p className="text-red-600 mb-3">{error}</p>}

          <button
            onClick={generateArrangement}
            disabled={isGenerating}
            className="w-full py-3 rounded font-medium transition-colors"
            style={{
              backgroundColor: isGenerating ? `${colors.primary}80` : colors.primary,
              color: colors.textLight
            }}
          >
            {isGenerating ? "Generating..." : "Generate Arrangement"}
          </button>
        </div>

        {/* Results */}
        {arrangementText && (
          <div
            className="p-6 rounded-lg"
            style={{
              backgroundColor: colors.secondary,
              color: colors.primary
            }}
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Your Arrangement Idea</h2>
              <button
                onClick={downloadArrangement}
                className="px-4 py-2 rounded font-medium"
                style={{
                  backgroundColor: colors.primary,
                  color: colors.textLight
                }}
              >
                Download Idea
              </button>
            </div>

            <div
              className="p-6 whitespace-pre-line text-center leading-relaxed"
              style={{
                backgroundColor: colors.accent,
                border: `1px solid ${colors.primary}`
              }}
            >
              {arrangementText}
            </div>

            {/* Display Generated Image */}
            {imageUrl && (
              <div className="mt-4 text-center">
                <img src={imageUrl} alt="Generated Arrangement" className="max-w-full h-auto" />
              </div>
            )}

            <div className="mt-4 text-sm italic" style={{ color: colors.primary }}>
              <p>Feel free to tweak these ideas for your perfect bouquet!</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FlowerArrangementGenerator;
