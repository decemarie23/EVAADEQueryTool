import { Component, OnInit} from '@angular/core';
import { config } from '../config.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './full-layout.component.html'
})
export class FullLayoutComponent implements OnInit {
  public ownerField = ['ownerID', 'ownerName', 'appraisalYear', 'updateRowDelete'];
  public agentField = ['agentID', 'agentName', 'appraisalYear', 'updateRowDelete'];
  public selectedDb = [];
  public selectedSource = 'Select Source';
  public mineralTables = this._config.mineralTable;
  public evaTables = this._config.evaTable;

  public disabled = false;
  public message = 'working message';
  public fieldData = 'sample';
  public status: {isopen: boolean} = {isopen: false};

  public toggled(open: boolean): void {
  }

  public onClickField(event, index): void {
    if (event.path[0].checked) {
      this.selectedDb[index].active = true;
      console.log(this.selectedDb);
      this._config.Main_Heading = event.path[0].innerText;
      this._config.setTableFields(this.selectedDb);
    } else {
      this.selectedDb[index].active = false;
      this._config.Main_Heading = event.path[0].innerText;
      this._config.setTableFields(this.selectedDb);
    }
  }

  public onSelectedDb(event): void {
    if (event.path[0].innerText === 'MINERALPRO') {
      console.log('Load table MineralPro');
      this.selectedDb = this.mineralTables;
      this.selectedSource = event.path[0].innerText;
    } else if (event.path[0].innerText === 'EVADE') {
      console.log('Load table Evade');
      this.selectedDb = this.evaTables;
      this.selectedSource = event.path[0].innerText;
    } else {
      console.log('Clear');
      this.selectedDb = [];
    }
  }

  public toggledDropdown($event: MouseEvent): void {
    $event.preventDefault();
    $event.stopPropagation();
    this.status.isopen = !this.status.isopen;
  }

  constructor(private _config: config) {}
  ngOnInit(): void {}
}
