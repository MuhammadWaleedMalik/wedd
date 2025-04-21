import React, { useState } from 'react';
import { useGroq } from '../../hooks/useGroq'; // Import the useGroq hook

const BudgetPlanner = () => {
  const colors = {
    primary: "#836F57",
    secondary: "#F3E9D8",
    accent: "#FFFFFF",
    background: "#5c5b5b",
    textLight: "#F8F9FA"
  };

  const [formData, setFormData] = useState({
    eventName: "",
    totalBudget: "",
    numberOfGuests: "",
    priorities: ""
  });

  const [isGenerating, setIsGenerating] = useState(false);
  const [error, setError] = useState("");

  const { fetchGroqResponse, response, loading } = useGroq(); // Use the hook

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const generateBudgetPlan = async () => {
    if (!formData.eventName.trim() || !formData.totalBudget.trim()) {
      setError("Please enter both the event name and total budget.");
      return;
    }

    setError("");
    setIsGenerating(true);

    // Prepare the prompt for the AI
    const { eventName, totalBudget, numberOfGuests, priorities } = formData;
    const prompt = `
      📊 AI Budget Plan 📊
      Event: ${eventName}
      Total Budget: $${totalBudget}

      Estimated Breakdown:
      - Venue: $${(totalBudget * 0.30).toFixed(2)}
      - Catering (${numberOfGuests || "approx. 100"} guests): $${(totalBudget * 0.30).toFixed(2)}
      - Decorations & Flowers: $${(totalBudget * 0.15).toFixed(2)}
      - Photography/Videography: $${(totalBudget * 0.10).toFixed(2)}
      - Entertainment: $${(totalBudget * 0.10).toFixed(2)}
      - Miscellaneous: $${(totalBudget * 0.05).toFixed(2)}

      ${priorities ? `Priority Focus: ${priorities}` : ""}
      
      📝 Note:
      Adjust the percentage allocations based on your personal preferences and actual quotes. AI has balanced this plan based on industry averages.
    `.replace(/^\s+/gm, '');

    try {
      await fetchGroqResponse("Generate Budget Plan", prompt); // Fetch the plan from the hook
    } catch (err) {
      setError(err.message || "An error occurred");
    }

    setIsGenerating(false);
  };

  const downloadPlan = () => {
    const element = document.createElement('a');
    const file = new Blob([response], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = 'budget-plan.txt';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className="min-h-screen p-6 font-serif" style={{ backgroundColor: colors.background }}>
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2 tracking-wide" style={{ color: colors.textLight }}>
            AI Budget Planner
          </h1>
          <p style={{ color: colors.secondary }}>
            Generate a smart event budget breakdown in seconds
          </p>
        </div>

        {/* How to Use */}
        <div className="p-6 rounded-lg mb-8" style={{ backgroundColor: colors.primary, color: colors.textLight }}>
          <h2 className="text-xl font-semibold mb-3">How to Use:</h2>
          <ol className="list-decimal pl-5 space-y-2">
            <li>Enter your event details and total budget</li>
            <li>Click "Generate Budget Plan"</li>
            <li>Download or copy your plan</li>
          </ol>
        </div>

        {/* Form */}
        <div className="p-6 rounded-lg mb-6" style={{ backgroundColor: colors.secondary, color: colors.primary }}>
          <div className="mb-4">
            <label className="block mb-1 font-medium">Event Name*</label>
            <input
              type="text"
              name="eventName"
              value={formData.eventName}
              onChange={handleChange}
              placeholder="Wedding, Birthday, Corporate Party"
              className="w-full px-3 py-2 border rounded"
              style={{ backgroundColor: colors.accent, borderColor: colors.primary }}
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1 font-medium">Total Budget ($)*</label>
            <input
              type="number"
              name="totalBudget"
              value={formData.totalBudget}
              onChange={handleChange}
              placeholder="5000"
              className="w-full px-3 py-2 border rounded"
              style={{ backgroundColor: colors.accent, borderColor: colors.primary }}
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1 font-medium">Number of Guests</label>
            <input
              type="number"
              name="numberOfGuests"
              value={formData.numberOfGuests}
              onChange={handleChange}
              placeholder="100"
              className="w-full px-3 py-2 border rounded"
              style={{ backgroundColor: colors.accent, borderColor: colors.primary }}
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1 font-medium">Priority Focus</label>
            <input
              type="text"
              name="priorities"
              value={formData.priorities}
              onChange={handleChange}
              placeholder="Photography, Venue, Food"
              className="w-full px-3 py-2 border rounded"
              style={{ backgroundColor: colors.accent, borderColor: colors.primary }}
            />
          </div>

          {error && <p className="text-red-600 mb-3">{error}</p>}

          <button
            onClick={generateBudgetPlan}
            disabled={isGenerating}
            className="w-full py-3 rounded font-medium transition-colors"
            style={{
              backgroundColor: isGenerating ? `${colors.primary}80` : colors.primary,
              color: colors.textLight
            }}
          >
            {isGenerating ? "Generating..." : "Generate Budget Plan"}
          </button>
        </div>

        {/* Results */}
        {response && (
          <div className="p-6 rounded-lg" style={{ backgroundColor: colors.secondary, color: colors.primary }}>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Your Budget Plan</h2>
              <button
                onClick={downloadPlan}
                className="px-4 py-2 rounded font-medium"
                style={{ backgroundColor: colors.primary, color: colors.textLight }}
              >
                Download Plan
              </button>
            </div>

            <div
              className="p-6 whitespace-pre-line text-center leading-relaxed"
              style={{ backgroundColor: colors.accent, border: `1px solid ${colors.primary}` }}
            >
              {response}
            </div>

            <div className="mt-4 text-sm italic" style={{ color: colors.primary }}>
              <p>Adjust the numbers based on real quotes and personal preferences!</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BudgetPlanner;
