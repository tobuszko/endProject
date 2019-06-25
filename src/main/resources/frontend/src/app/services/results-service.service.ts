import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { gameResults } from '../gameResults';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ResultsServiceService {

    private apiUrl: string;

  constructor(private http: HttpClient) {
      this.apiUrl = 'http://localhost:8080/results';
   }

  public findAll(): Observable<gameResults[]> {
    return this.http.get<gameResults[]>(this.apiUrl);
  }

  public save(gameResult: gameResults) {
    return this.http.post<gameResults>(this.apiUrl, gameResult);
  }

}
