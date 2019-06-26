import { Component, OnInit } from '@angular/core';
import { ResultsServiceService } from '../services/results-service.service';
import { gameResults } from '../gameResults';
import { gameTypes } from '../gameTypes';


@Component({
  selector: 'app-wyniki',
  templateUrl: './wyniki.component.html',
  styleUrls: ['./wyniki.component.css']
})
export class WynikiComponent implements OnInit {

  gameResult: gameResults[];
  gameType: gameTypes;

  constructor(private resultsService: ResultsServiceService) { }

  ngOnInit() {
        this.resultsService.findAll().subscribe(data => {
        this.gameResult = data;
    });
  }



}
