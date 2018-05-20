import { Directive, ElementRef, Input, OnInit, OnChanges } from '@angular/core';

@Directive({
  selector: '[appCanvas]'
})
export class CanvasDirective implements OnInit, OnChanges {

  @Input() private param;

  // constructor(
  //   private el: ElementRef
  // ) { }

  ngOnChanges() {
    console.log(`changes`, this.param);
  }

  ngOnInit() {
    console.log(`init`, this.param);
  }
}
