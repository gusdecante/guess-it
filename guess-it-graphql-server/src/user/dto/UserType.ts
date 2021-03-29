import { Field, Int, ObjectType, ID } from '@nestjs/graphql';

@ObjectType()
export class UserType {
  @Field(() => ID)
  readonly id?: string;
  @Field({ nullable: true })
  readonly name: string;
  @Field({ nullable: true })
  readonly timeToHitTheNumber: number; // Tempo para acertar
  @Field({ nullable: true })
  readonly attemptsToHitTheNumber: number; // Número de tentativas
  @Field({ nullable: true })
  readonly attemptsNumber: number; // Número sequencial da jogada
  @Field({ nullable: true })
  readonly xp: number; // Cálculo do xp
}

/*
timeToHitTheNumber: string
attemptsToHitTheNumber: number
attemptsNumber: number
*/
