import { Component, OnInit, Input } from '@angular/core';
import { Item } from 'src/app/models/drop';

@Component({
  selector: 'app-item-anchor-links',
  templateUrl: './item-anchor-links.component.html',
  styleUrls: ['./item-anchor-links.component.scss']
})
export class ItemAnchorLinksComponent implements OnInit {

  @Input() items: Item[] = [];
  @Input() idPrefix = 'item-';

  constructor() { }

  ngOnInit() {
  }

}
