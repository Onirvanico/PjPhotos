import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { lowerCaseValidator } from 'src/app/shared/validators/lowercase.validators';
import { UserNotTakenValidatorService } from './user-not-taken.validator.service';
import { NewUser } from './new-user';
import { SignupService } from './signup.service';
import { Router } from '@angular/router';

@Component({
 templateUrl: './signup.component.html'
})
export class SignupComponent implements OnInit {
    
    signupForm: FormGroup;
    
    constructor(private formBuider: FormBuilder, private userNotTaken: UserNotTakenValidatorService,
                private signupService: SignupService, private router: Router){}

    ngOnInit(): void {

        this.signupForm = this.formBuider.group({
            email: ['', [
                Validators.required, Validators.email
            ]
        ],
            fullName: ['', [ Validators.required, Validators.minLength(2), Validators.maxLength(40)]
         ],
            userName: ['', [ Validators.required, Validators.minLength(2), Validators.maxLength(30),
                             lowerCaseValidator ], this.userNotTaken.checkUserNameTaken() ],
            password: ['', [ Validators.required, Validators.minLength(8), Validators.maxLength(12) ] ]

    });
    }
    signup() {
        const newUser = this.signupForm.getRawValue() as NewUser;
        this.signupService.signup(newUser)
            .subscribe(()=> this.router.navigate([''])),
            err => console.log(err.getMessage());
            
    }
}