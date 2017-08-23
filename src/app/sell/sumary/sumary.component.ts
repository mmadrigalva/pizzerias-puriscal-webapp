import { Component, OnInit } from '@angular/core';
import { SellService } from 'app/sell/sell.service';

@Component({
  selector: 'sumary',
  templateUrl: './sumary.component.html',
  styleUrls: ['./sumary.component.scss']
})
export class SumaryComponent implements OnInit {

  constructor(protected sellService: SellService) { }

  ngOnInit() {
  }

}
