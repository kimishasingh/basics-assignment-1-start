import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`
  success-alert {
      color: red;
  }
  
  warning-alert {
      color: orange;
  }
  `]
})
export class AppComponent {
}
