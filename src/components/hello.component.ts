import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ServerModule } from '@angular/platform-server';
import { RenderOptions } from '@nguniversal/common/engine';

@Component({
  selector: 'app-hello',
  template: `
    <p>Hello from Angular!</p>

    <p *ngIf="show">help</p>

    <button (click)="toggle()">Toggle</button>
  `
})
export class HelloComponent {
  static forRender(): RenderOptions {
    return {
      document: '<app-hello></app-hello>',
      bootstrap: HelloComponentModule,
      inlineCriticalCss: true
    };
  }

  show = false;
  ngOnInit() {

  }

  toggle() {
    this.show = !this.show;
  }
}

@NgModule({
  imports: [
    BrowserModule.withServerTransition({ appId: 'hello' }),
    ServerModule
  ],
  declarations: [
    HelloComponent
  ],
  bootstrap: [
    HelloComponent
  ]
})
export class HelloComponentModule {}
