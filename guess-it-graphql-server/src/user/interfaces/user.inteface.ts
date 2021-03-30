import { Document } from 'mongoose';

export interface User extends Document {
  readonly name: string;
  readonly timeToHitTheNumber: number;
  readonly attemptsToHitTheNumber: number;
}

/*
timeToHitTheNumber: number
attemptsToHitTheNumber: number
attemptsNumber: number
xp: 
*/
