import { Component, inject } from '@angular/core';
import { Item } from '../../components/item/item';
import { HttpClient } from '@angular/common/http';
import { CheckedItemType, ItemType } from '../../types';
import { AsyncPipe } from '@angular/common';
import { ItemsState } from '../../services/items-state';

@Component({
  selector: 'app-items',
  imports: [Item, AsyncPipe],
  templateUrl: './items.html',
  styleUrl: './items.css',
})
export class Items {
  private http = inject(HttpClient);
  private itemsState = inject(ItemsState);

  items$ = this.http.get<ItemType[]>('/data/items.json');

  onItemCheck(event: CheckedItemType) {
    this.itemsState.toggle(event.id, event.isChecked, event.value);
  }
}
