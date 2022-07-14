import { Directive, ElementRef, OnInit, Input } from '@angular/core';

@Directive({
  selector: '[ImgLazy]',
})
export class ImgLazyDirective implements OnInit {
  @Input() imagen: string;

  constructor(private el: ElementRef) {}

  ngOnInit() {
    const intersectionObserver: IntersectionObserver = new IntersectionObserver(
      this.callback,
      {
        rootMargin: '100px 0px',
      }
    );

    intersectionObserver.observe(this.el.nativeElement);
  }

  private callback: IntersectionObserverCallback = (
    entries: IntersectionObserverEntry[],
    observer: IntersectionObserver
  ) => {
    entries.forEach(({ isIntersecting, target }) => {
      if (isIntersecting && this.imagen) {
        (target as HTMLImageElement).src = this.imagen;
        observer.unobserve(target);
      }
    });
  };
}
