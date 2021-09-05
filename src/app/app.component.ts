import { Component, OnInit } from '@angular/core';
import { NewsService } from './news.service';
import { InterfaceNews } from './InterfaceNews';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'mudes';

  noticia = {} as InterfaceNews
  noticias: InterfaceNews[];

  constructor(private newsService: NewsService){}

  ngOnInit(){
    this.obterTodas()
  }
  
  obterTodas(){
    this.newsService.obterNoticias().subscribe((noticias: InterfaceNews[]) => {
      this.noticias = noticias as InterfaceNews[]
    })
  }

  obterNoticiaPorId(){
    this.newsService.obterNoticiaPorId(2)
      .subscribe(res => console.log(res))
  }
}
