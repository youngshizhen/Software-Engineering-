import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-frame2',
  templateUrl: './frame2.component.html',
  styleUrls: ['./frame2.component.css']
})
export class Frame2Component implements OnInit {

  constructor() {
  }
  showDetails() {
    document.getElementById('main.left.ccc').style.display = '';
  }




  ngOnInit() {
  }

}

