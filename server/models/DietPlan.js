import mongoose from 'mongoose';

const dietPlanSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  calories: {
    type: Number,
    required: true,
  },
  meals: {
    type: [String],
    required: true,
  },
}, { timestamps: true });

const DietPlan = mongoose.model('DietPlan', dietPlanSchema);

export default DietPlan;
