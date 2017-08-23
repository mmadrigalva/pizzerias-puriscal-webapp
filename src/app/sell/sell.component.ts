import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'sell',
  templateUrl: './sell.component.html',
  styleUrls: ['./sell.component.scss']
})
export class SellComponent implements OnInit {
  title = 'Ventas';
  constructor(private router: Router) { }

  ngOnInit() {
  }
  goToSellIndex() {
    this.router.navigate(['/sell']);
  }
}
