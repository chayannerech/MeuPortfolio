import { Component } from '@angular/core';
import { ItemStack } from './models/item-stack';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-stack',
  standalone: true,
  imports: [ NgForOf ],
  templateUrl: './stack.component.html'
})

export class StackComponent {
  public itensStack: ItemStack[] = [
    { titulo: ".NET" },
    { titulo: "Angular" },
    { titulo: "TypeScript" },
    { titulo: "Node.js" },
    { titulo: "Entity Framework" },
    { titulo: "Microsoft SQL Server" },
    { titulo: "MongoDB" },
    { titulo: "Selenium" },
    { titulo: "Cypress" }
  ]
}
