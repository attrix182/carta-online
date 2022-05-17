import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-make-order',
  templateUrl: './make-order.component.html',
  styleUrls: ['./make-order.component.css']
})
export class MakeOrderComponent implements OnInit {
  name:string;
  @Input() order:any

  constructor(private storage:StorageService, private router:Router) { }

  ngOnInit(): void {
  }

  postOrder(){
    let orderFormat = {
      name:this.name,
      order:this.order
    }
    this.storage.Insert('orders',orderFormat).then(()=>{
      this.router.navigate(['/success'])
      console.log('order posted')
    });
  }




}
