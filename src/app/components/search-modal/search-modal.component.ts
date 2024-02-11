import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-search-modal',
  templateUrl: './search-modal.component.html',
  styleUrls: ['./search-modal.component.scss'],
})
export class SearchModalComponent {
  searchText: string = '';

  constructor(private modalCtrl: ModalController) {}
  cancel() {
    this.modalCtrl.dismiss(null, 'cancel');
  }

  search() {
    this.modalCtrl.dismiss(this.searchText, 'search');
  }
}
