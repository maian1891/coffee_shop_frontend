import { CommonModule } from '@angular/common';
import {
  Component,
  OnInit,
  Input,
  CUSTOM_ELEMENTS_SCHEMA,
} from '@angular/core';
import { Drink, DrinksService } from 'src/app/services/drinks.service';
import { ModalController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonItem,
  IonLabel,
  IonInput,
  IonButton,
} from '@ionic/angular/standalone';
import { DrinkGraphicComponent } from '../drink-graphic/drink-graphic.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-drink-form',
  templateUrl: './drink-form.component.html',
  styleUrls: ['./drink-form.component.scss'],
  standalone: true,
  imports: [
    IonButton,
    IonInput,
    IonLabel,
    IonItem,
    IonContent,
    IonTitle,
    IonToolbar,
    IonHeader,
    DrinkGraphicComponent,
    FormsModule,
    CommonModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class DrinkFormComponent implements OnInit {
  @Input() drink!: Drink;
  @Input() isNew!: boolean;

  constructor(
    public auth: AuthService,
    private modalCtrl: ModalController,
    private drinkService: DrinksService
  ) {}

  ngOnInit() {
    if (this.isNew) {
      this.drink = {
        id: -1,
        title: '',
        recipe: [],
      };
      this.addIngredient();
    }
  }

  customTrackBy(index: number, obj: any): any {
    return index;
  }

  addIngredient(i: number = 0) {
    this.drink.recipe.splice(i + 1, 0, { name: '', color: 'white', parts: 1 });
  }

  removeIngredient(i: number) {
    this.drink.recipe.splice(i, 1);
  }

  closeModal() {
    this.modalCtrl.dismiss();
  }

  saveClicked() {
    this.drinkService.saveDrink(this.drink);
    this.closeModal();
  }

  deleteClicked() {
    this.drinkService.deleteDrink(this.drink);
    this.closeModal();
  }

  logForm() {}
}
