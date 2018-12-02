import { Component, OnInit } from '@angular/core';
import { DROPS, PATH_TO_SERVANT_FILE, DropDetail, Material } from '@app/drops';

@Component({
  selector: 'app-drop-rate',
  templateUrl: './drop-rate.component.html',
  styleUrls: ['./drop-rate.component.scss']
})
export class DropRateComponent implements OnInit {

  public DROPS: Material[] = DROPS;
  public IMGPATH = PATH_TO_SERVANT_FILE;

  constructor() { }

  ngOnInit() {
  }

}
