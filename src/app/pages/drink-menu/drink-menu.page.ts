import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonIcon,
  ModalController,
} from '@ionic/angular/standalone';
import { Drink, DrinksService } from '../../services/drinks.service';
import { AuthService } from '../../services/auth.service';
import { DrinkFormComponent } from './drink-form/drink-form.component';
import { NgFor, NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-drink-menu',
  templateUrl: 'drink-menu.page.html',
  styleUrls: ['drink-menu.page.scss'],
  standalone: true,
  imports: [
    IonIcon,
    IonCardContent,
    IonCardTitle,
    IonCardHeader,
    IonCard,
    IonContent,
    IonTitle,
    IonToolbar,
    IonHeader,
    NgIf,
    NgFor,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class DrinkMenuPage implements OnInit {
  Object = Object;

  constructor(
    public auth: AuthService,
    private modalCtrl: ModalController,
    public drinks: DrinksService
  ) {}

  ngOnInit(): void {
    this.drinks.getDrinks();
  }

  async openForm(activedrink: Drink | null = null) {
    if (!this.auth.can('get:drinks-detail')) {
      return;
    }

    const modal = await this.modalCtrl.create({
      component: DrinkFormComponent,
      componentProps: { drink: activedrink, isNew: !activedrink },
    });

    modal.present();
  }
}
