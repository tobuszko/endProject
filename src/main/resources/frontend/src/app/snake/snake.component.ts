import { Component, OnInit } from '@angular/core';
import { CONTROLS, COLORS, BOARD_SIZE, GAME_TYPES } from './configuration';
import { NgModule }  from '@angular/core';
import { NgForm } from '@angular/forms';
import { gameResults } from '../gameResults';
import { gameTypes } from '../gameTypes';
import { ResultsServiceService } from '../services/results-service.service';

@Component({
  selector: 'app-snake',
  templateUrl: './snake.component.html',
  styleUrls: ['./snake.component.css'],
  host: {
  '(document:keydown)': 'handleKeyboardEvents($event)'
  }
})

export class SnakeComponent implements OnInit {
  private interval: number;
  private tempDirection: number;
  private isGameOver = false;
  private answered = false;
  public getKeys = Object.keys;
  public board = [];
  public obstacles = [];
  public score = 0;
  public gameStarted = false;
  public numberRemember = [];
  public usersAnswer: string;
  private correctAnswer: string;
  private gameResults: gameResults;
  private gameType: gameTypes;
  private i = 0;
  private answer: string;
  private rightNumber1Value: number;
  private rightNumber1Visible: boolean =  false;
  private rightNumber2Value: number;
  private rightNumber2Visible: boolean = false;
  private leftNumber1Value: number;
  private leftNumber1Visible: boolean =  false;
  private leftNumber2Value: number;
  private leftNumber2Visible: boolean = false;
  private boxNumber = 0;


    private snake = {
    direction: CONTROLS.LEFT,
    parts: [
      {
        x: -1,
        y: -1
      }
    ]
    };


    private fruit = {
      x: -1,
      y: -1
    };


  constructor(private resultsService: ResultsServiceService) {
  this.setBoard();
  }



  handleKeyboardEvents(e: KeyboardEvent) {
    if (e.keyCode === CONTROLS.LEFT && this.snake.direction !== CONTROLS.RIGHT) {
      this.tempDirection = CONTROLS.LEFT;
    } else if (e.keyCode === CONTROLS.UP && this.snake.direction !== CONTROLS.DOWN) {
      this.tempDirection = CONTROLS.UP;
    } else if (e.keyCode === CONTROLS.RIGHT && this.snake.direction !== CONTROLS.LEFT) {
      this.tempDirection = CONTROLS.RIGHT;
    } else if (e.keyCode === CONTROLS.DOWN && this.snake.direction !== CONTROLS.UP) {
      this.tempDirection = CONTROLS.DOWN;
    }
  }

  setColors(col: number, row: number): string {
    if (this.isGameOver) {
      return COLORS.GAME_OVER;
    } else if (this.fruit.x === row && this.fruit.y === col) {
      return COLORS.FRUIT;
    } else if (this.snake.parts[0].x === row && this.snake.parts[0].y === col) {
      return COLORS.HEAD;
    } else if (this.board[col][row] === true) {
      return COLORS.BODY;
    }

    return COLORS.BOARD;
  };

  updatePositions(): void {
    let newHead = this.repositionHead();
    let me = this;
    let i = 0;
    let counter = 0;


    if (this.boardCollision(newHead)) {
      return this.gameOver();
    }

    if (this.selfCollision(newHead)) {
      return this.gameOver();
    } else if (this.fruitCollision(newHead)) {
      this.eatFruit();
    }



    let oldTail = this.snake.parts.pop();
    this.board[oldTail.y][oldTail.x] = false;

    this.snake.parts.unshift(newHead);
    this.board[newHead.y][newHead.x] = true;

    this.snake.direction = this.tempDirection;

    setTimeout(() => {
      me.updatePositions();
    }, this.interval);
  }


 resetBoxes(boxNo: number): void {
      switch(boxNo){
         case 1:
              this.leftNumber1Visible = false;
              break;
         case 2:
              this.leftNumber2Visible = false;
              break;
         case 3:
              this.rightNumber1Visible=false;
              break;
         case 4:
              this.rightNumber2Visible=false;
              break;
          default:
              break;
      }
}


  showRandomNumber(): void {
    this.resetBoxes(this.boxNumber);
    if(!this.isGameOver){
    let me = this;
          this.numberRemember[this.i]= Math.floor(Math.random() * 10);
                this.boxNumber = Math.floor(Math.random() * 4) + 1;
          if (this.boxNumber == 1){
              this.leftNumber1Value = this.numberRemember[this.i];
              this.leftNumber1Visible = true;
          } else if ( this.boxNumber == 2) {
              this.leftNumber2Value = this.numberRemember[this.i];
              this.leftNumber2Visible = true;
          } else if ( this.boxNumber == 3) {
              this.rightNumber1Value = this.numberRemember[this.i];
              this.rightNumber1Visible=true;
          } else if ( this.boxNumber == 4) {
              this.rightNumber2Value = this.numberRemember[this.i];
              this.rightNumber2Visible=true;
          }
          this.i++;
    console.log(this.numberRemember[this.i]);
    setTimeout(() => {
       me.showRandomNumber();
    }, this.interval*30);

  }

  }




  repositionHead(): any {
    let newHead = Object.assign({}, this.snake.parts[0]);

    if (this.tempDirection === CONTROLS.LEFT) {
      newHead.x -= 1;
    } else if (this.tempDirection === CONTROLS.RIGHT) {
      newHead.x += 1;
    } else if (this.tempDirection === CONTROLS.UP) {
      newHead.y -= 1;
    } else if (this.tempDirection === CONTROLS.DOWN) {
      newHead.y += 1;
    }

    return newHead;
  }


  checkObstacles(x, y): boolean {
    let res = false;

    this.obstacles.forEach((val) => {
      if (val.x === x && val.y === y) {
        res = true;
      }
    });

    return res;
  }

  obstacleCollision(part: any): boolean {
    return this.checkObstacles(part.x, part.y);
  }

  boardCollision(part: any): boolean {
    return part.x === BOARD_SIZE || part.x === -1 || part.y === BOARD_SIZE || part.y === -1;
  }

  selfCollision(part: any): boolean {
    return this.board[part.y][part.x] === true;
  }

  fruitCollision(part: any): boolean {
    return part.x === this.fruit.x && part.y === this.fruit.y;
  }

  resetFruit(): void {
    let x = this.randomNumber();
    let y = this.randomNumber();

    if (this.board[y][x] === true || this.checkObstacles(x, y)) {
      return this.resetFruit();
    }

    this.fruit = {
      x: x,
      y: y
    };
  }

  eatFruit(): void {
    this.score++;

    let tail = Object.assign({}, this.snake.parts[this.snake.parts.length - 1]);

    this.snake.parts.push(tail);
    this.resetFruit();

    if (this.score % 5 === 0) {
      this.interval -= 15;
    }
}


gameOver(): void {
    this.isGameOver = true;
    this.gameStarted = false;
    this.resetBoxes(this.boxNumber);
    this.setBoard();
  }

  randomNumber(): any {
    return Math.floor(Math.random() * BOARD_SIZE);
  }

  setBoard(): void {
    this.board = [];

    for (let i = 0; i < BOARD_SIZE; i++) {
      this.board[i] = [];
      for (let j = 0; j < BOARD_SIZE; j++) {
        this.board[i][j] = false;
      }
    }
  }


onSubmit(f: NgForm) {
          this.correctAnswer = this.numberRemember.join("");
          if (this.correctAnswer == f.value.userAnswer){
              this.answer = "Dobra odpowiedź";
          } else {
              this.answer = "Błędna odpowiedź";
          }
              let gameType = new gameTypes("SNAKE");
              let gameResult = new gameResults(
              gameType,
              this.correctAnswer,
              f.value.userAnswer);
          this.answered=true;
          this.resultsService.save(gameResult).subscribe();
            this.numberRemember = [];
            this.gameResults = null;
            this.i = 0;
}


  newGame(): void {
    this.answered = false;
    this.gameStarted = true;
    this.score = 0;
    this.tempDirection = CONTROLS.LEFT;
    this.isGameOver = false;
    this.interval = 150;
    this.snake = {
      direction: CONTROLS.LEFT,
      parts: []
    };

    for (let i = 0; i < 3; i++) {
      this.snake.parts.push({ x: 8 + i, y: 8 });
    }
    this.resetFruit();
    this.showRandomNumber();
    this.updatePositions();
}




  ngOnInit() {
  }

}
