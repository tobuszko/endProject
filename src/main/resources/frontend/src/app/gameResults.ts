import { gameTypes } from './gameTypes';

export class gameResults {

  private id: number;
  private game: gameTypes;
  private correctAnswer: string;
  private usersAnswer: string;
  private gameDate: Date;


  constructor(
  game: gameTypes,
  correctAnswer: string,
  usersAnswer: string,
  ) {
      this.game = game;
      this.correctAnswer = correctAnswer;
      this.usersAnswer = usersAnswer;
  }

  formatDate(): void {
    this.gameDate.toLocaleDateString('en-Us');
  }


}

