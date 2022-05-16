import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-item-detalle',
  templateUrl: './item-detalle.component.html',
  styleUrls: ['./item-detalle.component.css']
})
export class ItemDetalleComponent implements OnInit {
  @Input() item: any;
  @Output() closeEvent = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {}

  close() {
    console.log('apreto boton close');
    this.closeEvent.emit(true);
  }
}
