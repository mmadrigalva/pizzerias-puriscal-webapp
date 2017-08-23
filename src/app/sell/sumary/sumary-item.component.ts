import { Component, OnInit, Input } from '@angular/core';
import { Category } from 'app/models/category';

@Component({
  selector: 'sumary-item',
  templateUrl: './sumary-item.component.html',
  styleUrls: ['./sumary-item.component.scss']
})
export class SumaryItemComponent implements OnInit {

  @Input() line: Category;
  constructor() { }

  ngOnInit() {
  }

}
