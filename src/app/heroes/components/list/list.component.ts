import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  public heroNames: string[] = ['Spiderman', 'Ironman', 'Hulk', 'She Hulk', 'Thor'];
  public deletedHeroName?: string = ''
  removeLastHero(): void{
    this.deletedHeroName = this.heroNames.pop();
    if(!this.deletedHeroName){
      this.deletedHeroName = '';
    }
  }
}
