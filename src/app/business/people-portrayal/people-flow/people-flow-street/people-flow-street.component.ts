import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-people-flow-street',
  templateUrl: './people-flow-street.component.html',
  styleUrls: ['./people-flow-street.component.scss']
})
export class PeopleFlowStreetComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  mbarColor="#38D898";
  tmpData=[
    {
      name:'沙家浜',
      value:3500,
  },
  {
    name:'沙家浜2',
    value:3300,
},
{
  name:'沙家浜3',
  value:3400,
},
{
  name:'沙家浜4',
  value:3700,
},
{
  name:'沙家浜5',
  value:3900,
}
];

}
