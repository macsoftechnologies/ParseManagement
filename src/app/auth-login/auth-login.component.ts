import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router'
import Swal from 'sweetalert2'
import { ParseServicesService } from '../Services/parse-services.service'
declare const $: any

@Component({
  selector: 'app-auth-login',
  templateUrl: './auth-login.component.html',
  styleUrls: ['./auth-login.component.scss'],
})
export class AuthLoginComponent implements OnInit {
  public LoginForm
  public hasError = false
  userlogindetails: any
  loginHideShow: any
  constructor(private router: Router, private services: ParseServicesService) {
    let emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/
    this.LoginForm = new FormGroup({
      Email: new FormControl('', [
        Validators.required,
        Validators.pattern(emailRegex),
      ]),
      password: new FormControl('', [Validators.required]),
    })
  }

  ngOnInit(): void {}
  signin() {
    if (this.LoginForm.valid) {
      let userlogindetails = {
        email: this.LoginForm.value.Email,
        password: this.LoginForm.value.password,
        mobileNum: this.LoginForm.value.MobileNumber,
      }
      this.services.adminLogin(userlogindetails).subscribe((resp) => {
        console.log(resp)
        if (resp.statusCode == 200) {
          console.log('Login Successfully')
          // localStorage.setItem('userDetails', resp.userdata.user_id)
          // localStorage.setItem('userEmail', JSON.stringify(resp.userdata.email))
          // this.services.loginHideShow.emit(true)
          // let path = localStorage.getItem('path') ?? ''
          Swal.fire({
            icon: 'success',
            text: 'User Login Successful',
          })
          // this.router.navigateByUrl(`/${path}`)
        } else {
          console.log('error')
          Swal.fire({
            icon: 'error',
            text: 'Invalid Credentials, Please enter valid credentails',
          })
        }
      })
    } else {
      this.hasError = true
      console.log('error')
    }
  }
}
