// Get elements
const stress = document.getElementById("stress");
const energy = document.getElementById("energy");
const positive = document.getElementById("positive");
const result = document.getElementById("result");

// Calculate mood percentage
function calculateMood() {
  const stressVal = Number(stress.value);
  const energyVal = Number(energy.value);
  const positiveVal = Number(positive.value);

  // Mood logic
  const moodPercentage =
    ((energyVal + positiveVal + (10 - stressVal)) / 30) * 100;

  const finalMood = Math.round(moodPercentage);

  // Update UI
  result.innerText = `😊 ${finalMood}%`;

  // Save to localStorage
  const moodData = {
    stress: stressVal,
    energy: energyVal,
    positive: positiveVal,
    percentage: finalMood,
    date: new Date().toLocaleDateString()
  };

  localStorage.setItem("moodData", JSON.stringify(moodData));
}

// Load saved mood on refresh
window.onload = function () {
  const savedMood = localStorage.getItem("moodData");

  if (savedMood) {
    const data = JSON.parse(savedMood);

    stress.value = data.stress;
    energy.value = data.energy;
    positive.value = data.positive;
    result.innerText = `😊 ${data.percentage}%`;
  }
};
