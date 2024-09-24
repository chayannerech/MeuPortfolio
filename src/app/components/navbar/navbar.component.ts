import { NgClass, NgFor, NgForOf } from '@angular/common';
import { Component } from '@angular/core';
import { LinkNavbar } from './models/link-navbar';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgClass, NgForOf],
  templateUrl: './navbar.component.html'
})

export class NavbarComponent {
  public colapsarNavbar = false;
  public linksNavbar: LinkNavbar[] = [
    { href: "#sobre", texto: "Sobre mim"},
    { href: "#habilidades", texto: "Minhas habilidades"},
    { href: "#stack", texto: "Stack"},
    { href: "#experiencias", texto: "Experiências"},
    { href: "#portfolio", texto: "Portfolio"},
  ];
}
