import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { CartService } from 'src/app/service/cart-service/cart-service.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  priceOptions: number[] = [600, 700, 800, 900, 1000, 1100, 1200, 1300, 1500, 2000]
  @Output() priceEvent = new EventEmitter<number>();
  @Input() priceText: string = '';
  constructor(
    private cartService: CartService
  ) { }

  ngOnInit(): void {
  }

  select(val: Event){
     this.priceEvent.emit(parseInt((<HTMLInputElement>val.target).value))
  }
}
