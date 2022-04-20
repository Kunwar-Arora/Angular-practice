import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  //! 3 since we want to change only background color we can use another method for small changes
  // @HostBinding('style.backgroundColor') backgroundColor: string = 'transparent';
  
  //* is used in 1 2 
  // constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  //! method 4 using bindings to directives
  @Input() defaultColor: string = 'transparent';
  @Input() highlightColor: string = 'blue'; 
  @HostBinding('style.backgroundColor') backgroundColor!: string; 
  ngOnInit(){
    // 1 currently commenting this method becoz to use HostListener
    //* this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue')

    //* 4
    this.backgroundColor = this.defaultColor;
  }
  @HostListener('mouseenter') mouseover(eventData: Event){
    //* 2 commenting these renderer method since we will use another method for small style changes 
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue')
    
    //* 3 using HostBinding method now
    // this.backgroundColor = 'blue';

    //* 4 
    this.backgroundColor = this.highlightColor
  }
  @HostListener('mouseleave') mouseleave(eventData: Event){
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent')

    // this.backgroundColor = 'transparent';

    this.backgroundColor = this.defaultColor;
  }

}
