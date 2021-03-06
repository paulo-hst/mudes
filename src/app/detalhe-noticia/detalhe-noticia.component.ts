import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-detalhe-noticia',
  templateUrl: './detalhe-noticia.component.html',
  styleUrls: ['./detalhe-noticia.component.css']
})
export class DetalheNoticiaComponent implements OnInit {

  texto: Object

  constructor(private route: ActivatedRoute) { 
    this.route.params.subscribe(params => {
      console.log(params)
      this.texto = params.id
    })
  }

  ngOnInit(): void {
  }

}
