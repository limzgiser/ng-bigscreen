import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-minority-nationality',
  templateUrl: './minority-nationality.component.html',
  styleUrls: ['./minority-nationality.component.scss']
})
export class MinorityNationalityComponent implements OnInit {
  data=[
    {
    "type":"回族",
    "value":5386
    },
    {
    "type":"苗族",
    "value":4378
    },
    {
    "type":"土家",
    "value":4185
    },
    {
    "type":"彝族",
    "value":3035
    },
    {
    "type":"壮族",
    "value":2644
    },
    {
    "type":"满族",
    "value":1322
    },
    {
    "type":"东乡",
    "value":1251
    },
    {
    "type":"侗族",
    "value":1057
    },
    {
    "type":"布依",
    "value":952
    },
    // {
    // "type":"蒙古",
    // "value":818
    // }
    ]
  constructor() { }

  ngOnInit() {
  }

}
