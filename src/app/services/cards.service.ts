import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Card } from '../store/cards.store';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardsService {
  api = `https://db.ygoprodeck.com/api/v7`

  private http = inject( HttpClient );

  loadCards(page = 0) {
    const url = `${this.api}/cardinfo.php?num=5&offset=${page * 5}`;
    return this.http.get<{ data : Card[] }>( url )
    .pipe( 
      map( resp => resp.data )
    );
  }

}
