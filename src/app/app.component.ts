import { Component } from '@angular/core';

import { Plugins } from '@capacitor/core'

const { SplashScreen, StatusBar } = Plugins;

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor() {
    this.initializeApp();
  }

  async initializeApp() {
    SplashScreen.hide().catch((err) => {
      console.warn(err);
    });

    StatusBar.setBackgroundColor({ color: "#2dd36f" }).catch((err) => {
      console.warn(err);
    });

  }
}
