import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Verse } from './verses';
import { Observable, take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VersesService {

  constructor(private httpClient: HttpClient) { }

  getVerse(): Observable<Verse> {
    return this.httpClient.get<Verse>('https://www.abibliadigital.com.br/api/verses/nvi/sl/23').pipe(take(1));
  }
}
