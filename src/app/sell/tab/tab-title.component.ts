import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { TabHeader } from 'app/models/tab-header';
import { SellService } from 'app/sell/sell.service';
export enum OptionStyle {
  Title = 1,
  Item = 2
}
@Component({
  selector: 'tab-title',
  templateUrl: './tab-title.component.html',
  styleUrls: ['./tab-title.component.scss']
})
export class TabTitleComponent implements OnInit {
  @Input() title: string;
  @Input() id: number;
  @Input() style: OptionStyle;
  @Output() onClick = new EventEmitter;
  styleOptions = OptionStyle;
  constructor(private sellService: SellService) { }

  ngOnInit() {
  }

  tabClick() {
    this.onClick.emit();
  }
  isSelected() {
    return this.sellService.getSelectedTab().id === this.id;
  }

}
