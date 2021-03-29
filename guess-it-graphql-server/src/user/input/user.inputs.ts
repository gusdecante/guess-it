import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class UserInput {
  @Field({ nullable: true })
  readonly name: string;
  @Field({ nullable: true })
  readonly timeToHitTheNumber: number; //Tempo para acertar
  @Field({ nullable: true })
  readonly attemptsToHitTheNumber: number; //Número de tentativas
  @Field({ nullable: true })
  readonly attemptsNumber: number; //Número sequencial da jogada
  @Field({ nullable: true })
  readonly xp: number;
}

/*
timeToHitTheNumber: number
attemptsToHitTheNumber: number
attemptsNumber: number
*/
