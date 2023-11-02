import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MovieListResponse } from '../models/movie-list.interface';
import { Observable } from 'rxjs';
import { MovieDetailsResponse } from '../models/movie-details.interface';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }

  getMovies(page :number): Observable<MovieListResponse>{
    return this.http.get<MovieListResponse>(`https://api.themoviedb.org/3/movie/popular?api_key=c1145bae31c48bd921e13ad767b7fb3a&&page=${page}`);
  }
  getMovieDetails(id:number): Observable<MovieDetailsResponse>{
    return this.http.get<MovieDetailsResponse>(`https://api.themoviedb.org/3/movie/${id}?api_key=c1145bae31c48bd921e13ad767b7fb3a`);
  }
}
