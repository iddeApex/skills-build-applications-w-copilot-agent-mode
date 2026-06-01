import { Schema, model } from 'mongoose'

const activitySchema = new Schema(
  {
    name: { type: String, required: true },
    durationMinutes: { type: Number, required: true },
    completedAt: { type: Date, default: Date.now }
  },
  {
    timestamps: true
  }
)

export const Activity = model('Activity', activitySchema)
