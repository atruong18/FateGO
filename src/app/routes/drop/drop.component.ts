import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/models/drop';
import { DROPS } from 'src/app/data/drop';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { faThumbtack } from '@fortawesome/free-solid-svg-icons';
import { ActionService, State } from 'src/app/services/store/action.service';

@Component({
  selector: 'app-drop',
  templateUrl: './drop.component.html',
  styleUrls: ['./drop.component.scss']
})
export class DropComponent implements OnInit {
  public faThumbtack = faThumbtack;
  public DROPS: Item[] = DROPS;
  public pinnedItemIds: number[] = [];
  public areaFilters: string[] = ['Salem'];

  constructor(private storage: LocalStorageService, private action: ActionService) { }

  ngOnInit() {
    this.refreshPins();
    this.action.get<number>(State.ItemDrop_SelectPin).subscribe(v => {
      this.updatePin(v);
      this.refreshPins();
    });
  }

  public clearAllPins(): void {
    this.storage.dropPinItemIds.value = [];
    this.refreshPins();
  }

  public updatePin(id: number): void {
    const storedPins: number[] = this.storage.dropPinItemIds.value;
    if (storedPins === undefined) {
      this.storage.dropPinItemIds.value = [id]; // No storage, initialize
      return;
    }
    const filtered = storedPins.filter(v => v !== id);
    if (filtered.length === storedPins.length) {
      filtered.push(id); // No changes, add
      this.storage.dropPinItemIds.value = filtered;
      return;
    }
    this.storage.dropPinItemIds.value = filtered; // Filtered, removed
  }

  private refreshPins(): void {
    this.pinnedItemIds = this.storage.dropPinItemIds.value;
  }

}
