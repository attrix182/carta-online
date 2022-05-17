import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-carta',
  templateUrl: './carta.component.html',
  styleUrls: ['./carta.component.css']
})
export class CartaComponent implements OnInit {
  public items: any;
  public itemSelected: any;
  public itemOrdered:any;
  constructor(private storage: StorageService) {}

  ngOnInit(): void {
    this.getMenuItems();
  }

  getMenuItems(): any {
    this.storage.GetAll('items').subscribe((items) => {
      this.items = items;
      console.log(items);
    });
  }

  showDetail(event: any) {
    let carta = document.querySelector('.carta') as HTMLElement;
    carta.classList.add('carta-overlay');
    console.log(event);
    this.itemSelected = event;
  }

  setItemOrdered(event: any) {
    this.closeDetail(event)
    this.itemOrdered = event;
    console.log(event);
  }

  closeDetail(event: any) {
    let carta = document.querySelector('.carta') as HTMLElement;
    carta.classList.remove('carta-overlay');

    let itemDetalle = document.querySelector('.card-item') as HTMLElement;
    itemDetalle.classList.add('animate__animated');
    itemDetalle.classList.add('animate__slideOutDown');
    setTimeout(() => {
      this.itemSelected = null;
    }, 200);
  }
}
