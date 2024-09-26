import { Component } from '@angular/core';
import { EmpresasExperiencia } from './models/empresas-experiencia';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-experiencias',
  standalone: true,
  imports: [ NgForOf ],
  templateUrl: './experiencias.component.html'
})

export class ExperienciasComponent {
  public empresas: EmpresasExperiencia[] = [
    { data: "Nov/2019 - Ago/2020", 
      logo: "logo-continental.png", 
      cargo: "Estagiária de Eng. Mecânica", 
      stack: "Mapeamento de falhas, análise de componentes, trabalho em equipe, planejamento de solução.",
      emCasoDeFalha: "Logo da continental"},   
      { data: "Out/2021 - Ago/2022", 
      logo: "logo-ambev.png", 
      cargo: "Estagiária de Energia e Fluídos", 
      stack: "Comunicação, gestão de KPI, liderança, análise de falhas, Excel.",
      emCasoDeFalha: "Logo da ambev"},   
    { data: "Mar/2023 - Nov/2023", 
      logo: "logo-cerumaq.png", 
      cargo: "Projetista Mecânica", 
      stack: "Trabalho em equipe, desenho técnico, gestão de projetos, gestão de prazos.",
      emCasoDeFalha: "Logo da cerumaq"},   
    { data: "Nov/2023 - Atualmente", 
      logo: "logo-mapeng.png", 
      cargo: "Desenhista Autônoma", 
      stack: "Desenho técnico, gestão de prazos, organização.",
      emCasoDeFalha: "Logo da mapeng"},   
    { data: "Mar/2024 - Atualmente", 
      logo: "logo-academia.png", 
      cargo: "Aluna de Programação", 
      stack: ".NET Framework, .NET Core, Entity Framework Core, ASP.NET Core MVC, ASP.NET Web API, Angular.",
      emCasoDeFalha: "Logo da academia"},   
  ]
}
