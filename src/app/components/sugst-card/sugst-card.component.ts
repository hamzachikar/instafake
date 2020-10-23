import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'sugst-card',
  templateUrl: './sugst-card.component.html',
  styleUrls: ['./sugst-card.component.scss']
})
export class SugstCardComponent implements OnInit {
  @Input() alias:string;
  @Input() activeStorie:boolean;
  constructor() { }

  ngOnInit(): void {
  }

}
