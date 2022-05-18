import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  public orders: any;
  public auxOrders: any;
  public filterSelected: any = 'all';

  constructor(private storage: StorageService) {}

  ngOnInit(): void {
    this.getOrders();
  }

  getOrders() {
    this.storage.GetAll('orders').subscribe((res) => {
      this.orders = res;
      this.auxOrders = this.orders;
      this.orderItems(this.filterSelected)
      console.log(res);
    });
  }

  orderItems(filter:string){
    switch(filter){
      case 'all':
        this.filterAll()
        break;
      case 'completed':
        this.filterByCompleted()
        break
      case 'pending':
        this.filterByPending()
        break;
    }
  }

  removeAllClass(){
    let btnAll = document.querySelector('#all') as HTMLElement;
    let btnPending = document.querySelector('#pending') as HTMLElement;
    let btnCompleted = document.querySelector('#completed') as HTMLElement;

    btnAll.classList.remove('selected')
    btnPending.classList.remove('selected')
    btnCompleted.classList.remove('selected')
  }

  filterAll() {
    this.filterSelected = 'all'
    this.auxOrders = this.orders;
    this.removeAllClass();
    let button = document.querySelector('#all') as HTMLElement;
    button.classList.add('selected')
  }

  filterByPending() {
    this.filterSelected = 'pending'
    this.removeAllClass();
    let button = document.querySelector('#pending') as HTMLElement;
    button.classList.add('selected')
    this.auxOrders = this.orders.filter((order) => {
      return order.status !== 'completed';
    });
    console.log(this.orders);
  }

  filterByCompleted() {
    this.filterSelected = 'completed'
    this.removeAllClass();
    let button = document.querySelector('#completed') as HTMLElement;
    button.classList.add('selected')
    this.auxOrders = this.orders.filter((order) => {
      return order.status === 'completed';
    });
    console.log(this.orders);
  }

  undoCompleteOrder(order: any) {
    order.status = 'pending';
    this.storage.Update(order.id, 'orders', order);
  }

  completeOrder(order: any) {
    if (order.status === 'completed') {
      this.undoCompleteOrder(order);
      return;
    }

    order.status = 'completed';
    this.storage.Update(order.id, 'orders', order).then((res) => {
      console.log(res);
    });
  }

  deleteOrders(): any {
    if (this.orders.length === 0) return;

    Swal.fire({
      title: '¿Seguro deseas eliminar todos los pedidos?',
      showDenyButton: true,
      confirmButtonText: 'Si',
      denyButtonText: `No`
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.storage.DeleteColecction('orders').then((res) => {
          console.log(res);
        });

        Swal.fire('Eliminados!', '', 'success');
      }
    });
  }
}
