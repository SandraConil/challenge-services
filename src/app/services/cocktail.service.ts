import { Injectable } from '@angular/core';
import { Cocktail } from '../cocktail';

@Injectable({
  providedIn: 'root'
})
export class CocktailService {

  mojito :Cocktail = new Cocktail('Mojito', 7, 'https://cuisine.nessma.tv/uploads/1/2019-06/59f748adf0254ead55c7f4271cebfc93.jpg');
  pinaColada : Cocktail = new Cocktail ('Pina Colada', 7, 'https://assets.afcdn.com/recipe/20180705/80258_w1024h1024c1cx974cy1535.webp');
  amour : Cocktail = new Cocktail ('Amor', 7, 'https://www.kadolog.com/sites/default/files/2015/54328/tropical-cocktail.jpg');

  cocktails : Cocktail [] = [
    this.mojito,
    this.pinaColada,
    this.amour
  ];

  constructor() { }

  //methode pour mes cocktails
  getCockatils(){
    return this.cocktails
  }
}
