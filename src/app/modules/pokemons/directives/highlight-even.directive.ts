import { AfterViewInit, Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlightEven]'
})
export class HighlightEvenDirective implements AfterViewInit {
  @Input('appHighlightEven') id: number = 0;

  constructor(
    private readonly element: ElementRef,
    private readonly renderer: Renderer2,
  ) { }

  public ngAfterViewInit(): void {
    if (!(this.id % 2)) {
      const [child] = this.element.nativeElement.children;
      this.renderer.setStyle(child, 'border', '1px solid #30b6dd');
    }
  }

}
