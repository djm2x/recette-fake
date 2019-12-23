import { Injectable } from '@angular/core';
import { Recette } from './recette';

@Injectable({
  providedIn: 'root'
})
export class DbFakeService {

  recettes: Recette[] = [
    {
      id: 1,
      titre: `Coquilles Saint Jacques gratinées`,
      description: `Pour votre prochain dîner de fête, vous avez promis d’épater à vos amis et votre famille,
          en leur concoctant un mets succulent, `,
      imageUrl: `https://static.cuisineaz.com/240x192/i107767-coquilles-saint-jacques-gratinees.jpg`,
      etaps: `
      Ouvrez les coquilles Saint-Jacques puis retirez les noix et les coraux.
      Lavez-les et rangez-les sur du papier absorbant pour les faire s'égoutter.
      Une fois sèches, coupez-les en cubes en laissant les coraux entiers. Réservez.;
        D'autre part, lavez soigneusement 6 coquilles vides. Mettez de côté.`,
      ingredients: `12 coquilles Saint-Jacques;1 poireau;1 oignon`
    },
    {
      id: 2,
      titre: `Coquilles Saint Jacques gratinées`,
      description: `Pour votre prochain dîner de fête, vous avez promis d’épater à vos amis et votre famille,
          en leur concoctant un mets succulent, `,
      imageUrl: `https://static.cuisineaz.com/240x192/i107767-coquilles-saint-jacques-gratinees.jpg`,
      etaps: `
      Ouvrez les coquilles Saint-Jacques puis retirez les noix et les coraux.
      Lavez-les et rangez-les sur du papier absorbant pour les faire s'égoutter.
      Une fois sèches, coupez-les en cubes en laissant les coraux entiers. Réservez.;
        D'autre part, lavez soigneusement 6 coquilles vides. Mettez de côté.`,
      ingredients: `12 coquilles Saint-Jacques;1 poireau;1 oignon`
    },
    {
      id: 3,
      titre: `Coquilles Saint Jacques gratinées`,
      description: `Pour votre prochain dîner de fête, vous avez promis d’épater à vos amis et votre famille,
          en leur concoctant un mets succulent, `,
      imageUrl: `https://static.cuisineaz.com/240x192/i107767-coquilles-saint-jacques-gratinees.jpg`,
      etaps: `
      Ouvrez les coquilles Saint-Jacques puis retirez les noix et les coraux.
      Lavez-les et rangez-les sur du papier absorbant pour les faire s'égoutter.
      Une fois sèches, coupez-les en cubes en laissant les coraux entiers. Réservez.;
        D'autre part, lavez soigneusement 6 coquilles vides. Mettez de côté.`,
      ingredients: `12 coquilles Saint-Jacques;1 poireau;1 oignon`
    },
  ];
}
