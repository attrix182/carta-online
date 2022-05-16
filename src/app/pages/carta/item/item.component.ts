import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {


  @Input() item:any;
  @Output() selectItem = new EventEmitter<any>();


  constructor() { }

  ngOnInit(): void {
  }

  showDetails(){
    this.selectItem.emit(this.item)
  }


}
