import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-people-flow-community',
  templateUrl: './people-flow-community.component.html',
  styleUrls: ['./people-flow-community.component.scss']
})
export class PeopleFlowCommunityComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  mbarColor="#38B6D8";
  tmpData = [
    {
      name: '沙家浜',
      value: 3500,
    },
    {
      name: '沙家浜2',
      value: 3300,
    },
    {
      name: '沙家浜3',
      value: 3400,
    },
    {
      name: '沙家浜4',
      value: 3700,
    },
    {
      name: '沙家浜5',
      value: 3900,
    }
  ];

}
