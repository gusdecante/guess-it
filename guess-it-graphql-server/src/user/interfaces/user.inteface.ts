import { Document } from 'mongoose';

export interface User extends Document {
  readonly name: string;
  readonly timeToHitTheNumber: number;
  readonly attemptsToHitTheNumber: number;
  readonly attemptsNumber: number;
  readonly xp: number;
}

/*
timeToHitTheNumber: number
attemptsToHitTheNumber: number
attemptsNumber: number
xp: 
*/
