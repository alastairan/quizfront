import  {Component} from '@angular/core'
import {FormBuilder, Validators} from '@angular/forms'
import { AuthService } from './auth.service'

@Component({
    templateUrl: './login.component.html'
})

export class LoginComponent {

    form
    auth = {} as any

    constructor(private authn: AuthService, private fb: FormBuilder) {
        this.auth = authn;
        this.form = fb.group({
            email: ['', Validators.required],
            password: ['', Validators.required]
        })
    }

}