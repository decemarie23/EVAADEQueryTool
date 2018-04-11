import { Injectable } from '@angular/core';

@Injectable()
export class config {
  static sampleTable = [];

  public Main_Heading = 'Search Fields';
  public tableFields = [];
  public agentFields = [
    {'name': 'Agent.name'},
    {'name': 'Agent.idAgent'},
    {'name': 'Agent.appraisal'},
    {'name': 'Agent.updateDt'},
    {'name': 'Agent.deleteFlag'}
  ];

  public appraisalFields = [
    {'name': 'Appraisal.name'},
    {'name': 'Appraisal.idAppraisal'},
    {'name': 'Appraisal.appraisal'},
    {'name': 'Appraisal.updateDt'},
    {'name': 'Appraisal.deleteFlag'}
  ];
  public fieldFields = [
    {'name': 'Field.name'},
    {'name': 'Field.idField'},
    {'name': 'Field.appraisal'},
    {'name': 'Field.updateDt'},
    {'name': 'Field.deleteFlag'}
  ];
  public journalFields = [
    {'name': 'Journal.name'},
    {'name': 'Journal.idJournal'},
    {'name': 'Journal.appraisal'},
    {'name': 'Journal.updateDt'},
    {'name': 'Journal.deleteFlag'}
  ];
  public leaseFields = [
    {'name': 'Lease.name'},
    {'name': 'Lease.idLease'},
    {'name': 'Lease.appraisal'},
    {'name': 'Lease.updateDt'},
    {'name': 'Lease.deleteFlag'}
  ];
  public operatorFields = [
    {'name': 'Operator.name'},
    {'name': 'Operator.idOperator'},
    {'name': 'Operator.appraisal'},
    {'name': 'Operator.updateDt'},
    {'name': 'Operator.deleteFlag'}
  ];
  public ownerFields = [
    {'name': 'Owner.name'},
    {'name': 'Owner.idOwner'},
    {'name': 'Owner.appraisal'},
    {'name': 'Owner.updateDt'},
    {'name': 'Owner.deleteFlag'}
  ];
  public unitFields = [
    {'name': 'Unit.name'},
    {'name': 'Unit.idUnit'},
    {'name': 'Unit.appraisal'},
    {'name': 'Unit.updateDt'},
    {'name': 'Unit.deleteFlag'}
  ];
  public mineralTable = [{'name': 'Manage agent', 'active': false},
                          {'name': 'Manage appraisal', 'active': false},
                          {'name': 'Manage field', 'active': false},
                          {'name': 'Manage journal', 'active': false},
                          {'name': 'Manage Lease', 'active': false},
                          {'name': 'Manage Operator', 'active': false},
                          {'name': 'Manage Owner', 'active': false},
                          {'name': 'Manage Unit', 'active': false}];
  public evaTable = [{'name': 'Evade agent', 'active': false},
                          {'name': 'Evade appraisal', 'active': false},
                          {'name': 'Evade field', 'active': false},
                          {'name': 'Evade journal', 'active': false},
                          {'name': 'Evade Lease', 'active': false},
                          {'name': 'Evade Operator', 'active': false},
                          {'name': 'Evade Owner', 'active': false},
                          {'name': 'Evade Unit', 'active': false}];

  public setTableFields (event): void {
    this.tableFields = [];
    for (let i = 0; i < event.length; i++) {
      if (event[i].active) {
        if (i === 0) {
          this.tableFields = this.tableFields.concat(this.agentFields);
        } if (i === 1) {
          this.tableFields = this.tableFields.concat(this.appraisalFields);
        } if (i === 2) {
          this.tableFields = this.tableFields.concat(this.fieldFields);
        } if (i === 3) {
          this.tableFields = this.tableFields.concat(this.journalFields);
        } if (i === 4) {
          this.tableFields = this.tableFields.concat(this.leaseFields);
        } if (i === 5) {
          this.tableFields = this.tableFields.concat(this.operatorFields);
        } if (i === 6) {
          this.tableFields = this.tableFields.concat(this.ownerFields);
        } if (i === 7) {
          this.tableFields = this.tableFields.concat(this.unitFields);
        }
      }
    }
    console.log(this.tableFields);
    config.sampleTable = this.tableFields;
  }
  public getTableFields() {
    return this.tableFields;
  }
}
