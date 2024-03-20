import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Camera, CameraResultType } from '@capacitor/camera';
import { AlertService } from '../global/services/alert/alert.service';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {
  pickedImage = null;
  profileForm: FormGroup;

  constructor(private fb: FormBuilder, private alertService: AlertService) {}

  ngOnInit() {
    this.profileForm = this.fb.group({
      displayName: ['', [Validators.required]],
      firstName: ['', [Validators.required]],
      lastName: ['', Validators.required],
      about: ['', [Validators.required, Validators.maxLength(100)]],
      interest: ['', [Validators.required]],
      type: ['', [Validators.required]],
      role: ['', [Validators.required, Validators.maxLength(100)]],
      experience: ['', [Validators.required]],
      stack: ['', [Validators.required]],
    });
  }

  async takePicture() {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.DataUrl,
    });

    this.pickedImage = image.dataUrl;
  }

  save() {
    if (this.profileForm.valid) {
      this.alertService.presentAlert('Saved', 'Profile has been updated');
      this.profileForm.reset();
    }
  }
}
