import { Component, signal, inject, computed } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { ItemsState } from '../../services/items-state';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  private router = inject(Router);
  private itemsState = inject(ItemsState);

  pageTitle = signal('');

  constructor() {
    this.router.events.pipe(filter((e) => e instanceof NavigationEnd)).subscribe(() => {
      let route = this.router.routerState.root;
      while (route.firstChild) route = route.firstChild;
      this.pageTitle.set(route.snapshot.data['title'] ?? '');
    });
  }

  checkedCount = computed(
    () => Object.values(this.itemsState.state()).filter((item) => item.isChecked).length,
  );

  values = computed(() =>
    Object.values(this.itemsState.state())
      .filter((item) => item.isChecked)
      .reduce((accum, curr) => accum + curr.value, 0),
  );
}
