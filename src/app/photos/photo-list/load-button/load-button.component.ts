import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'pj-load-button',
  templateUrl: './load-button.component.html',
  styleUrls: ['./load-button.component.css']
})
export class LoadButtonComponent implements OnInit {

  @Input() hasMore: boolean = true;

  constructor() { }

  ngOnInit() {
  }

}
