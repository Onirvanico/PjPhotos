import { NgModule } from '@angular/core';
import { PhotoListComponent } from './photo-list.component';
import { FilterByDescription } from './filter-by-description.pipe';
import { PhotosComponent } from './photos/photos.component';
import { LoadButtonComponent } from './load-button/load-button.component';
import { CommonModule } from '@angular/common';
import { PhotoModule } from '../photo/photo.module';
import { CardModule } from 'src/app/shared/components/card/card.module';
import { SearchModule } from './search/search.module';
import { DarkenOnHoverModule } from 'src/app/shared/directives/darken-on-hover/darken-on-hover.modulte';

@NgModule({
    declarations: [
        PhotoListComponent,
        FilterByDescription,
        PhotosComponent,
        LoadButtonComponent
    ],
    imports: [
        CommonModule,
        PhotoModule,
        CardModule,
        SearchModule,
        DarkenOnHoverModule
    ]
})
export class PhotoListModule {

}