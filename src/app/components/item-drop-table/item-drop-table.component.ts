import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Item } from 'src/app/models/drop';
import { DROPS } from 'src/app/data/drop';
import { faThumbtack } from '@fortawesome/free-solid-svg-icons';
import { ActionService, State } from 'src/app/services/store/action.service';

interface TableItem extends Item {
  collapsed?: boolean;
  pinned?: boolean;
}

@Component({
  selector: 'app-item-drop-table',
  templateUrl: './item-drop-table.component.html',
  styleUrls: ['./item-drop-table.component.scss']
})
export class ItemDropTableComponent implements OnInit, OnChanges {
  public faThumbtack = faThumbtack;
  public items: TableItem[] = DROPS.map<TableItem>(i => {
    const tItem: TableItem = i;
    tItem.collapsed = true;
    tItem.pinned = false;
    return tItem;
  });

  @Input('items') itemsOriginal: Item[] = [];

  @Input() pinnedItemIds: number[] = [];
  @Input() areaNameFilters: string[] = [];

  constructor(private action: ActionService) { }

  ngOnInit() {
  }

  ngOnChanges() {
    this.items = this.itemsOriginal
      .map<TableItem>(i => {
        const tItem: TableItem = i;
        const existingItem: TableItem = this.items.find(v => v.id === i.id);
        tItem.collapsed = existingItem === undefined || existingItem.collapsed;
        tItem.pinned = this.pinnedItemIds.indexOf(tItem.id) > -1;
        return tItem;
      })
      .sort((a, b) => {
        if (a.pinned && !b.pinned) {
          return -1;
        }
        if (b.pinned && !a.pinned) {
          return 1;
        }
        return a.id - b.id;
      });
  }

  updatePin(item: TableItem): void {
    this.action.trigger({ state: State.ItemDrop_SelectPin, payload: item.id });
  }


}
