import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError, toArray, map } from 'rxjs/operators';
import { InterfaceNews } from './InterfaceNews';

@Injectable({
  providedIn: 'root'
})

export class NewsService {
  
  url = 'api/Noticia/'

  constructor(private httpClient: HttpClient) { }
  
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }




  obterNoticias(): Observable<InterfaceNews[]>{
    return this.httpClient
      .get<{ noticias: InterfaceNews[] }>(`${this.url}ObterNoticias`)
      .pipe(map(res => res.noticias))
  }




  obterNoticiaPorId(id: number){
    return this.httpClient.get<InterfaceNews>(`${this.url}ObterNoticiaPorId/?id=${id}`)
  }

  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  };


}
