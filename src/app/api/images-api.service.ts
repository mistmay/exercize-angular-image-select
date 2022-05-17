import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Category } from '../models/category';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImagesApiService {
  subscription!: Subscription;
  imagesArray: BehaviorSubject<string[]> = new BehaviorSubject<string[]>([]);

  constructor(private http: HttpClient) { }

  getImages(category: Category, number: Number): Observable<string[]> {
    return this.http.get<string[]>(`https://shibe.online/api/${category}?count=${number}&urls=true&httpsUrls=true`);
  }

  updateImagesObservable(category: Category, number: Number): void {
    this.subscription = this.getImages(category, number).subscribe((res: string[]) => {
      this.imagesArray.next(res);
      this.subscription.unsubscribe();
    });
  }

  returnImagesObservable(category: Category, number: Number): Observable<string[]> {
    this.updateImagesObservable(category, number);
    return this.imagesArray.asObservable();
  }

  resetObservable(): void {
    this.imagesArray.next([]);
  }

}
