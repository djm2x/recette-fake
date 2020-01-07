import { Recipe } from './../models/recette';
import { of } from 'rxjs';
import { DbFakeService } from './../models/db-fake.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private db: DbFakeService) { }

  getAll() {
    return of(this.db.recettes);
  }

  getById(id: number) {
    const i = this.db.recettes.findIndex(e => e._id === id);
    const r: Recipe = this.db.recettes[i];
    return of(r);
  }

  post(o: Recipe) {
    const i = this.db.recettes.push(o);
    return of(i);
  }

  put(id: number, o: Recipe) {
    const i = this.db.recettes.findIndex(e => e._id === id);
    this.db.recettes[i] = o;
    return of({});
  }

  delete(id: number) {
    const i = this.db.recettes.findIndex(e => e._id === id);
    this.db.recettes.splice(i, 1);
    return of(i);
  }
}
