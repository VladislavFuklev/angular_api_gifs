import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs'
import { GiphResponse } from '../models/giph.response'

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  http = inject(HttpClient)

  private apiKey = '0it1XMzW4uqW2xGk90KylTiwKEcKsF9B';
  private apiUrl = 'https://api.giphy.com/v1/gifs';

  getGiph(): Observable<GiphResponse> {
    return this.http.get<GiphResponse>(`${this.apiUrl}/trending?api_key=${this.apiKey}&limit=10`)
  }

  searchGiph(query: string): Observable<GiphResponse> {
    return this.http.get<GiphResponse>(`https://api.giphy.com/v1/gifs/search?api_key=${this.apiKey}&q=${query}`)
  }

}
