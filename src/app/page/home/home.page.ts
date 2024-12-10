import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  IonAvatar,
  IonContent,
  IonHeader,
  IonIcon,
  IonLabel,
  IonText,
  IonTitle,
  IonToolbar, IonSearchbar
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { locateOutline, notificationsOutline } from "ionicons/icons";

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [
    IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, 
    IonAvatar, IonText, IonLabel, IonIcon, IonSearchbar
  ]
})
export class HomePage implements OnInit {

  constructor() {
    addIcons({ notificationsOutline });
  }

  ngOnInit() {}

}
