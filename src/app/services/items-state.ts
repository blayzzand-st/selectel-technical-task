import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ItemsState {
  state = signal<Record<number, { isChecked: boolean; value: number }>>({});

  toggle(id: number, isChecked: boolean, value: number) {
    this.state.update((prev) => ({ ...prev, [id]: { isChecked, value } }));
  }
}
