import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss']
})
export class TopNavComponent implements OnInit {
  showSearch:boolean=true;
  value = '';
  constructor() { }

  ngOnInit(): void {
  }
  onResize(event){
    if( event.target.innerWidth <630){
      this.showSearch=false
    }
    else{
      this.showSearch=true;
    }
  }
}
