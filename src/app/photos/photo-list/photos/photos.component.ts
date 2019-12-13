import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Photo } from '../../photo/photo.interface';

@Component({
  selector: 'pj-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnChanges{
  
  @Input() photos: Photo[] = [];
  
  rows: any[] = [];
  
  constructor() { }
  
  ngOnChanges(changes: SimpleChanges): void {
    if(changes.photos) this.rows = this.groupColumns(this.photos);
  }

  groupColumns(photos: Photo[]){
    
     const newRow = [];
     for(let i = 0; i < photos.length; i+=3) {
        newRow.push(photos.slice(i, i + 3));
     }
     return newRow;
  }

}
