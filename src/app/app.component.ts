import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet, Platform } from '@ionic/angular/standalone';
import { AuthService } from './services/auth.service';
import { SplashScreen } from '@capacitor/splash-screen';
import { StatusBar, Style } from '@capacitor/status-bar';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonApp, IonRouterOutlet],
})
export class AppComponent {
  constructor(private auth: AuthService, private platform: Platform) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(async () => {
      await SplashScreen.hide();

      // Perform required auth actions
      this.auth.load_jwts();
      this.auth.check_token_fragment();
    });
  }
}
