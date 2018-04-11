import { Component, OnInit } from '@angular/core';
import { config } from '../config.service';

@Component({
  selector: 'app-criteria',
  templateUrl: 'criteria.component.html'
})
export class CriteriaComponent implements OnInit {
  public sampleText = this._config.Main_Heading;
  public tableFieldname = config.sampleTable;

  constructor(private _config: config) { }

  public updateField() {
    console.log(config.sampleTable);
    this.tableFieldname = config.sampleTable;
  }

  ngOnInit() {
    this.tableFieldname = config.sampleTable;
  }
}
