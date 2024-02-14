import { DestroyRef, Injectable, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { GiphResponse } from '../models/giph.response';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class GiphService {
  apiService = inject(ApiService);
  destroyRef = inject(DestroyRef);
  giphData = signal<GiphResponse | null>(null);

  getGiph() {
    this.apiService
      .getGiph()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(
        (response) => {
          this.giphData.set(response);
        },
        (error) => {
          console.log(error);
        }
      );
  }

  searchGiph(query: string) {
    this.apiService
      .searchGiph(query)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(
        (response) => {
          this.giphData.set(response);
        },
        (error) => {
          console.log(error);
        }
      );
  }
}
