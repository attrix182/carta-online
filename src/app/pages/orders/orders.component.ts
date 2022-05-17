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

  constructor(private storage: StorageService) {}

  ngOnInit(): void {
    this.getOrders();
  }

  getOrders() {
    this.storage.GetAll('orders').subscribe((res) => {
      this.orders = res;
      this.auxOrders = this.orders;
      //this.filterByPending();
      console.log(res);
    });
  }

  filterByPending() {
    this.auxOrders = this.orders.filter((order) => {
      return order.status !== 'completed';
    });
    console.log(this.orders);
  }

  filterByCompleted() {
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
   if(this.orders.length === 0) return;

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
