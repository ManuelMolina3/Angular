import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieDetailsResponse } from 'src/app/models/movie-details.interface';
import { MovieService } from 'src/app/service/movie.service';

@Component({
  selector: 'app-page-details',
  templateUrl: './page-details.component.html',
  styleUrls: ['./page-details.component.css']
})
export class PageDetailsComponent implements OnInit{
  route:ActivatedRoute= inject(ActivatedRoute);
  movieId= 0;
  peliculaSeleccionada!: MovieDetailsResponse;
  constructor(private movieService: MovieService){
    this.movieId= Number(this.route.snapshot.params['id']);
  }

  ngOnInit(): void {
    this.movieService.getMovieDetails(this.movieId).subscribe(details=>{
      this.peliculaSeleccionada= details
    });
  }
  getUrlImg(){
    return `https://www.themoviedb.org/t/p/w220_and_h330_face/${this.peliculaSeleccionada.poster_path}`;
  }


}
