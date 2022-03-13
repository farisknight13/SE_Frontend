import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
@Input("Media_query") mobileQueryMax: boolean;
@Output("toggle") navToggle = new EventEmitter();
@Output() sayHi = new EventEmitter<String>();

//  ประกาศตัวแปรใส่ค่า จดหมายกับค้นหา อ้างอิงเลข
  demoMailNoti = 50;
  demoNoti = 9;

  constructor() { }

  ngOnInit(): void {
  }

  onClickNavToggle(){
    this.navToggle.emit();
    this.sayHi.emit("phimporn");

  }

}
