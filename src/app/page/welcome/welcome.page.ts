import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import Swiper from 'swiper';
import { SwiperContainer } from 'swiper/element';
import { register } from 'swiper/element/bundle';

register();

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class WelcomePage implements OnInit {

  @ViewChild('swiperWelcome', { static: true })
  swiperContainer!: ElementRef<SwiperContainer>;

  public swiper?: Swiper;

  public buttonText: string = 'Continue';

  public swiperArray = [
    {
      code: 1,
      img: "../../../assets/icon/icon1.png",
      titulo: "Manager All Passwords",
      texto: "Brigade os offline and we do not store your data on server. Your data is saved offline on yout device and you can sync your data in yout online clound."
    },
    {
      code: 2,
      img: "../../../assets/icon/icon2.png",
      titulo: "We Store For You",
      texto: "We store your logins, IDs, and payment information in your vault. Just remember a master password and forget other things and its offline."
    },
    {
      code: 3,
      img: "../../../assets/icon/icon3.png",
      titulo: "Lock Your Files",
      texto: "You can lock your files based on priority that is set by you. Brigade supports type based file security maintenance."
    },
    {
      code: 4,
      img: "../../../assets/icon/icon4.png",
      titulo: "Save Your Cards",
      texto: "Save your card information including bank holdings. Don’t worry we don’t have any permission to look through your saved informations."
    }
  ];

  constructor() { }

  ngOnInit() {}

  public onNavegarProximoSwiper() {
    const swiperElement = this.swiperContainer.nativeElement;
    const swiper = swiperElement.swiper;
    if (swiper) {
      swiper.slideNext();
    }
    this.atualizarTextoBotao(swiper.realIndex);
  }

  private atualizarTextoBotao(currentIndex: any) {
    switch (currentIndex) {
      case 0:
        this.buttonText = 'Next';
        break;
      case 1:
        this.buttonText = 'Next';
        break;
      case 2:
        this.buttonText = 'Next';
        break;
      case 3:
        this.buttonText = 'Lets Start';
        break;
      default:
        this.buttonText = 'Continue';
        break;
    }
  }

}
