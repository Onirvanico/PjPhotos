import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from 'src/app/core/auth/auth.service';
import { PlatFormDetectorService } from 'src/app/core/platform-detector/platform-detector.service';

@Component({
    templateUrl: './signin.component.html'
})
export class SignInComponent implements OnInit {

    loginForm: FormGroup;
    @ViewChild('inputUserName') inputUserName: ElementRef<HTMLInputElement>;
    
    constructor(private formBuilder: FormBuilder, private authService: AuthService,
                private router: Router, private isPlatFormBrowser: PlatFormDetectorService){}

    ngOnInit(): void {
        this.loginForm = this.formBuilder.group({
            userName: ['', Validators.required],
            password: ['', Validators.required]
        });
        
        this.isPlatFormBrowser &&
                 this.inputUserName.nativeElement.focus();
    }


     login() {
       const  userName = this.loginForm.get('userName').value;
       const  password = this.loginForm.get('password').value;

         return this.authService.authenticate(userName, password)
         .subscribe( () => this.router.navigate(['user', userName]),
             err => {
                 console.log("Fazendo teste" + JSON.stringify(err));
                 this.loginForm.reset();
                 this.isPlatFormBrowser &&
                 this.inputUserName.nativeElement.focus();
                 alert("Email ou senha inválido!");
             }
         );
     }
}