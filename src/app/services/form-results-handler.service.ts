import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class FormResultsHandlerService {
  formResults: BehaviorSubject<[Category, Number] | undefined> = new BehaviorSubject<[Category, Number] | undefined>(undefined);

  constructor() { }

  getFormResults(): Observable<[Category, Number] | undefined> {
    return this.formResults.asObservable();
  }

  newFormResults(results: [Category, Number] | undefined): void {
    this.formResults.next(results);
  }

}
