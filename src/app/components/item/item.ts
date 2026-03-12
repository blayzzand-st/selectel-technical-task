import { Component, Input, output } from '@angular/core';
import { ItemType, CheckedItemType } from '../../types';

@Component({
  selector: 'app-item',
  imports: [],
  templateUrl: './item.html',
  styleUrl: './item.css',
})
export class Item {
  @Input({ required: true }) data!: ItemType;
  valueChanged = output<CheckedItemType>();

  onCheck(event: Event) {
    const isChecked = (event.target as HTMLInputElement).checked;
    this.valueChanged.emit({ id: this.data.id, isChecked, value: this.data.value });
  }
}
