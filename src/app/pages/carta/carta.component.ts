import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-carta',
  templateUrl: './carta.component.html',
  styleUrls: ['./carta.component.css'],
})
export class CartaComponent implements OnInit {
  constructor(private storage: StorageService) {}

  ngOnInit(): void {
    this.getMenuItems();
  }

  getMenuItems(): any {
    this.storage.GetAll('items').subscribe((items) => {
      console.log(items);
    });
  }
}
