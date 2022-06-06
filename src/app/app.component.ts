import { Component } from '@angular/core';
import { PeliculasService } from './peliculas.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'leccion';
  pelicula:any;
  Peliculasdetalle:any;

  constructor(private Peliculas:PeliculasService){}
  ngOnInit(): void{
   }

   getpeliculasName(name:any){
    this.Peliculas.getpelicula(name.value).subscribe({
      next:(s)=>{
        this.pelicula = s.results;
        debugger
      },
      error: (e)=>{
        debugger
      }
    })
  }

  getpeliculasdetalle(id:number){
    this.Peliculas.getdetalle(id).subscribe({
      next:(s)=>{
        this.Peliculasdetalle = s.results;
        debugger
      },
      error: (e)=>{
        debugger
      }
    })
  }


}
