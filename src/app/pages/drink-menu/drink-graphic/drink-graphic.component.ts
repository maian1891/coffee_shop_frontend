import { NgFor } from '@angular/common';
import {
  Component,
  OnInit,
  Input,
  CUSTOM_ELEMENTS_SCHEMA,
} from '@angular/core';
import { Drink } from 'src/app/services/drinks.service';

@Component({
  selector: 'app-drink-graphic',
  templateUrl: './drink-graphic.component.html',
  styleUrls: ['./drink-graphic.component.scss'],
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [NgFor],
})
export class DrinkGraphicComponent implements OnInit {
  @Input() drink!: Drink;

  constructor() {}

  ngOnInit(): void {
    console.log('DrinkGraphicComponent OnInit');
  }
}
