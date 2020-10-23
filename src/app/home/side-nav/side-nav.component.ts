import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {
  aliasSugCard=[
    {alias:'user.one',storie:true},
    {alias:'user.two',storie:false},
    {alias:'user.tree',storie:false},
    {alias:'user.four',storie:true}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
