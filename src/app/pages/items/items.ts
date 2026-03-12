import { Component, inject } from '@angular/core';
import { Item } from '../../components/item/item';
import { CheckedItemType } from '../../types';
import { ItemsState } from '../../services/items-state';
import items from '../../../assets/data/items.json';

@Component({
  selector: 'app-items',
  imports: [Item],
  templateUrl: './items.html',
  styleUrl: './items.css',
})
export class Items {
  private itemsState = inject(ItemsState);

  items = items;

  onItemCheck(event: CheckedItemType) {
    this.itemsState.toggle(event.id, event.isChecked, event.value);
  }
}
