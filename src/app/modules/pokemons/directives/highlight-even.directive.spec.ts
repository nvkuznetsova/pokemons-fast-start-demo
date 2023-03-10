import { ElementRef, Renderer2 } from '@angular/core';
import { HighlightEvenDirective } from './highlight-even.directive';

describe('HighlightEvenDirective', () => {
  let directive: HighlightEvenDirective;
  const { build, element, renderer } = setup<HighlightEvenDirective>();

  beforeEach(() => {
    directive = build();
  });

  afterEach(() => {
    renderer.setStyle.calls.reset();
  });

  it('should create an instance', () => {
    expect(directive).toBeTruthy();
  });

  it('should highlight even element', () => {
    directive.id = 2;
    directive.ngAfterViewInit();

    expect(renderer.setStyle).toHaveBeenCalledOnceWith({}, 'border', '1px solid #30b6dd');
  });

  it('should not highlight odd element', () => {
    directive.id = 1;
    directive.ngAfterViewInit();

    expect(renderer.setStyle).not.toHaveBeenCalledOnceWith({}, 'border', '1px solid #30b6dd');
  });
});

function setup<T>(): { default: () => any; build: () => T; [key: string]: any } {
  const element = { nativeElement: { children: [{}] } } as ElementRef;
  const renderer = { setStyle: jasmine.createSpy('setStyle') } as unknown as Renderer2;
  const builder = {
    renderer,
    element,
    default(): any {
      return builder;
    },
    build(): any {
      return new HighlightEvenDirective(element, renderer);
    }
  };
  return builder;
}
