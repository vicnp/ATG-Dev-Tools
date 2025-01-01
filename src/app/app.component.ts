import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginPageComponent } from "./pages/login-page/login-page.component";
import { TokenPageComponent } from "./pages/token-page/token-page.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LoginPageComponent, TokenPageComponent],
  templateUrl: './app.component.html'
})
export class AppComponent {
activeTab: string;

  constructor() {
      this.activeTab = 'token';
  }
  
  setActiveTab(tab: string) {
    this.activeTab = tab;
  }

}
