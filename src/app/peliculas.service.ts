import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  constructor(private http:HttpClient) { }

getpelicula(nombre:string){
  return this.http.get<any>('https://api.themoviedb.org/3/search/movie?api_key=5b8d745622754f72e9646c04e5df2db4&language=en-US&query='+ nombre +'&page=1&include_adult=false')
}

getdetalle(id:number){
  return this.http.get<any>('https://api.themoviedb.org/3/movie/'+ id +'?api_key=5b8d745622754f72e9646c04e5df2db4')
}
}


