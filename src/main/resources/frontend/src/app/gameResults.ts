export class gameResults {

  private id: number;
  private game: string;
  private correctAnswer: string;
  private usersAnswer: string;
  private gameDate: string;


  constructor(
  game: string,
  correctAnswer: string,
  usersAnswer: string,
  ) {
      this.game = game;
      this.correctAnswer = correctAnswer;
      this.usersAnswer = usersAnswer;
  }



}
