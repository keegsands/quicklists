import { Component } from '@angular/core';

import { Plugins } from '@capacitor/core'
import { ChecklistService } from './services/checklist.service';

const { SplashScreen, StatusBar } = Plugins;

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(private checklistService: ChecklistService) {
    this.initializeApp();
  }

  async initializeApp() {
    await this.checklistService.load();
    SplashScreen.hide().catch((err) => {
      console.warn(err);
    });

    StatusBar.setBackgroundColor({ color: "#2dd36f" }).catch((err) => {
      console.warn(err);
    });

  }
}
