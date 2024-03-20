import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { AlertService } from 'src/app/global/services/alert/alert.service';
import { LoaderService } from 'src/app/global/services/loader/loader.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  signupForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private navCtrl: NavController,
    private loaderService: LoaderService,
    private alertService: AlertService
  ) {}

  ngOnInit() {
    this.signupForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  signup() {
    if (!this.signupForm.valid) return;
    this.loaderService.presentProcessingLoading();
    setTimeout(() => {
      this.loaderService.dismissLoader();
      this.alertService.presentAlert(
        'Registered',
        'Account has been created successfully'
      );
      this.router.navigate(['/tabs/tab1']);
    }, 3000);
  }

  navigate(path: string) {
    this.navCtrl.navigateForward(path);
  }
}
