
import { SignInComponent } from './signin/signin.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { VmessageModule } from '../shared/components/vmessage/vmessage.module';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [ SignInComponent ],
    imports: [ ReactiveFormsModule,
               CommonModule,
               VmessageModule,
               RouterModule 
            ]
})
export class HomeModule{
    
  
}