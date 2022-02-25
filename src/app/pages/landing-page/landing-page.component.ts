import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  constructor() { }

  nav: {
    label: string,
    route: string,
  }[] = [];

  ngOnInit(): void {
    this.nav = [
      {
        label: "Gerenciar imóveis",
        route: "/gerenciar-imoveis"
      },
      {
        label: "Buscar imóveis",
        route: "/buscar-imoveis"
      },
      {
        label: "Sobre nós",
        route: "/sobre-nos"
      },
    ]
  }

}
