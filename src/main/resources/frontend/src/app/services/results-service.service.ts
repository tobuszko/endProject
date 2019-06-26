import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { gameResults } from '../gameResults';
import { gameTypes } from '../gameTypes';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ResultsServiceService {

    private apiUrl: string;

  constructor(private http: HttpClient) {

   }

  public findAll(): Observable<gameResults[]> {
    this.apiUrl = 'http://localhost:8080/results'
    return this.http.get<gameResults[]>(this.apiUrl);
  }

  public save(gameResult: gameResults) {
    this.apiUrl = 'http://localhost:8080/results/SNAKE';
    return this.http.put<gameResults>(this.apiUrl, gameResult);
  }

}
