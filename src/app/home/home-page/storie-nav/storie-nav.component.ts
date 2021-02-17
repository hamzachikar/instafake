import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'storie-nav',
  templateUrl: './storie-nav.component.html',
  styleUrls: ['./storie-nav.component.scss']
})
export class StorieNavComponent implements OnInit,AfterViewInit {
  @ViewChild('stories') private scroller: ElementRef;
  @ViewChild('storieContainer') private scrollerContainer:ElementRef;
  scrollDiv=0;
  storieScroll=0;
  constructor() { }
  ngAfterViewInit(): void {
    this.scrollDiv=this.scroller.nativeElement.scrollWidth/90;
  }

  ngOnInit(): void {

  }
  onScroll(direct:string){

    if(direct==="left"){
      if(this.storieScroll<this.scrollDiv){
        if((this.scroller.nativeElement.scrollWidth-this.scroller.nativeElement.scrollLeft)/210>1){
          this.storieScroll=this.storieScroll+3
          this.scroller.nativeElement.scrollLeft =  this.scroller.nativeElement.scrollLeft+210;
        }
      }
    }
    else{
      if(this.storieScroll>0){
        this.storieScroll=this.storieScroll-3;
        this.scroller.nativeElement.scrollLeft =  this.scroller.nativeElement.scrollLeft-210;
      }
      else{
        this.storieScroll=0
      }
    }
   // console.log(this.storieScroll);
  }
}
