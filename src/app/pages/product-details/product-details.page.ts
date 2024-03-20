import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Course } from 'src/app/global/interfaces/course.interface';
import { AlertService } from 'src/app/global/services/alert/alert.service';
import { CartService } from 'src/app/global/services/cart/cart.service';
import { EndpointsService } from 'src/app/global/services/endpoint/endpoints.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.page.html',
  styleUrls: ['./product-details.page.scss'],
})
export class ProductDetailsPage implements OnInit {
  course: Course;

  constructor(
    private route: ActivatedRoute,
    private endpointService: EndpointsService,
    private alertService: AlertService,
    private navCtrl: NavController,
    public cartService: CartService
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (!id) {
      this.alertService.presentAlert(
        'Course ID Invalid',
        'Course ID does not exists. Try Again!'
      );
      return this.navCtrl.navigateRoot('tabs/tab1');
    }
    this.loadCourse(Number(id));
  }

  loadCourse(id: number) {
    this.course = this.endpointService.getCourseById(id);
    console.log(this.course);
  }

  openCart() {
    this.alertService.presentAlert(
      'Already Exists',
      `This course '${this.course.courseName}' is already exist in cart. Please check your cart!`
    );
    this.navCtrl.navigateForward('tabs/tab2');
  }
}
