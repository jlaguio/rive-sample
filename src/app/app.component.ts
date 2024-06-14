import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <canvas
      class="Canvas"
      riv="bird-floating"
      [attr.width]="500"
      [attr.height]="500"
    >
      <riv-animation *ngSwitchCase="'simple'" play></riv-animation>
    </canvas>
  `,
})
export class AppComponent {
  title = 'sandbox-angular';
}
