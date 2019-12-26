
import { SignInComponent } from './signin/signin.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { VmessageModule } from '../shared/components/vmessage/vmessage.module';
import { RouterModule } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home.component';

@NgModule({
    declarations: [ SignInComponent, SignupComponent,
                    HomeComponent ],
    imports: [ ReactiveFormsModule,
               CommonModule,
               FormsModule,
               VmessageModule,
               RouterModule 
            ]
})
export class HomeModule{
    
  
}