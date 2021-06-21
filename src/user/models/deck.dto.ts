import { IsArray, IsNotEmpty } from 'class-validator';

export class DeckDto {
  @IsArray()
  @IsNotEmpty()
  decks: any[];
}
