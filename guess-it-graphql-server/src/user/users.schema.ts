import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
  name: String,
  timeToHitTheNumber: Number,
  attemptsToHitTheNumber: Number,
  attemptsNumber: Number,
  xp: Number,
});

/*
timeToHitTheNumber: string
attemptsToHitTheNumber: number
attemptsNumber: number
*/
