import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/models/drop';
import { DROPS } from 'src/app/data/drop';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { faThumbtack } from '@fortawesome/free-solid-svg-icons';

interface TableItem extends Item {
  collapsed?: boolean;
  pinned?: boolean;
}

@Component({
  selector: 'app-drop',
  templateUrl: './drop.component.html',
  styleUrls: ['./drop.component.scss']
})
export class DropComponent implements OnInit {
  public faThumbtack = faThumbtack;

  public items: TableItem[] = DROPS.map<TableItem>(i => {
    const tItem: TableItem = i;
    tItem.collapsed = true;
    tItem.pinned = false;
    return tItem;
  });

  public marker1 = 'Salem';

  constructor(private storage: LocalStorageService) { }

  ngOnInit() {
    this.refreshPins();
  }

  private refreshPins(): void {
    const pinnedItems = this.storage.dropPinItemNames.value;
    if (pinnedItems === undefined) {
      this.storage.dropPinItemNames.value = [];
    } else {
      this.items.forEach(item => {
        if (pinnedItems.findIndex(p => p === item.name) > 0) {
          item.pinned = true;
        }
      });
    }
    this.sortItems();
  }

  public clearAllPins(): void {
    this.storage.dropPinItemNames.value = [];
    this.refreshPins();
  }

  public updatePin(item: TableItem): void {
    item.pinned = !item.pinned;
    let pinnedItems = this.storage.dropPinItemNames.value;
    if (item.pinned) {
      pinnedItems.push(item.name);
      this.storage.dropPinItemNames.value = pinnedItems;
    } else {
      pinnedItems = pinnedItems.filter(v => v !== item.name);
      this.storage.dropPinItemNames.value = pinnedItems;
    }
    this.sortItems();
  }

  public sortItems(): void {
    this.items.sort((a, b) => {
      if (a.pinned && b.pinned) {
        return a.id - b.id;
      }
      if (a.pinned) {
        return -1;
      }
      if (b.pinned) {
        return 1;
      }
      return a.id - b.id;
    })
  }

}
