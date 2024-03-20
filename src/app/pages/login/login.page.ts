import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { AlertService } from 'src/app/global/services/alert/alert.service';
import { LoaderService } from 'src/app/global/services/loader/loader.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private navCtrl: NavController,
    private loaderService: LoaderService,
    private alertService: AlertService
  ) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  login() {
    if (!this.loginForm.valid) return;
    this.loaderService.presentProcessingLoading();
    setTimeout(() => {
      this.loaderService.dismissLoader();
      this.router.navigate(['/tabs/tab1']);
    }, 3000);
  }

  navigate(path: string) {
    this.navCtrl.navigateForward(path);
  }
}
