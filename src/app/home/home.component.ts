import { Component, OnInit } from '@angular/core';
import { InterfaceNews } from '../InterfaceNews';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

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
