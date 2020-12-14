import {
  Directive,
  Output,
  EventEmitter,
  ElementRef,
  AfterViewInit,
} from '@angular/core';
import { Chart } from '@antv/g2';
@Directive({
  selector: '[ngxG2]',
})
export class NgxG2Directive implements AfterViewInit {
  @Output() configure = new EventEmitter();



  constructor(private elementRef: ElementRef) {}



  ngAfterViewInit(): void {
    console.log(111111111);
    const hostElement = this.elementRef.nativeElement;
    const box = hostElement.getBoundingClientRect();
    this.configure.emit(
      new Chart({
        container: hostElement,
        width: box.width,
        height: box.height,
        autoFit: true,
      })
    );
  }
}
