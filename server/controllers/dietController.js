import DietPlan from "../models/DietPlan.js"; // Assuming you have a DietPlan model

// Create Diet Plan Controller
const createDietPlanController = async (req, res) => {
  const { age, weight, height } = req.body;

  // Validate input fields
  if (!age || !weight || !height) {
    return res.status(400).json({ success: false, message: "Age, weight, and height are required." });
  }

  // Logic to create a diet plan based on age, weight, and height
  const dietPlan = {
    // Example logic for diet plan creation
    calories: calculateCalories(age, weight, height),
    meals: generateMeals(age, weight, height),
  };

  const newDietPlan = new DietPlan(dietPlan);

  try {
    await newDietPlan.save();
    res.status(201).json({ success: true, message: "Diet plan created successfully.", dietPlan });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error." });
  }
};

// Function to calculate calories (example logic)
const calculateCalories = (age, weight, height) => {
  // Implement your calorie calculation logic here
  return 2000; // Placeholder value
};

// Function to generate meals (example logic)
const generateMeals = (age, weight, height) => {
  // Implement your meal generation logic here
  return ["Breakfast", "Lunch", "Dinner"]; // Placeholder value
};

// Get Diet Plan Controller
const getDietPlanController = async (req, res) => {
  // Logic to retrieve the user's diet plan
  const dietPlan = await DietPlan.findOne({ userId: req.user._id }); // Assuming userId is stored in the diet plan

  if (!dietPlan) {
    return res.status(404).json({ success: false, message: "Diet plan not found." });
  }

  res.status(200).json({ success: true, dietPlan });
};

export { createDietPlanController, getDietPlanController };
