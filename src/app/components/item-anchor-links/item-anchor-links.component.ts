import { Component, OnInit, Input } from '@angular/core';
import { Grade, Item } from 'src/app/models/drop';
import { ItemGradeFilterOptions } from 'src/app/pipes/ItemGradeFilterPipe';

@Component({
  selector: 'app-item-anchor-links',
  templateUrl: './item-anchor-links.component.html',
  styleUrls: ['./item-anchor-links.component.scss']
})
export class ItemAnchorLinksComponent implements OnInit {

  @Input() items: Item[] = [];
  @Input() idPrefix = 'item-';

  goldGradeFilter: ItemGradeFilterOptions = { grade: Grade.GOLD };
  silverGradeFilter: ItemGradeFilterOptions = { grade: Grade.SILVER };
  bronzeGradeFilter: ItemGradeFilterOptions = { grade: Grade.BRONZE };

  constructor() { }

  ngOnInit() {
  }

}
