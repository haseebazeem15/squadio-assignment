import { Component, OnInit } from '@angular/core';
import { EndpointsService } from '../global/services/endpoint/endpoints.service';
import { CourseCategory } from '../global/interfaces/course-category.interface';
import { Course } from '../global/interfaces/course.interface';
import { NavController } from '@ionic/angular';
import { CartService } from '../global/services/cart/cart.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page implements OnInit {
  courseCategoriesList: CourseCategory[];
  coursesList: Course[];
  currentPage = 1;
  coursesPerPage = 4;

  slideOpts = {
    initialSlide: 0,
    speed: 400,
    slidesPerView: 4.5,
    spaceBetween: 0,
  };

  constructor(
    private endPointsService: EndpointsService,
    private navCtrl: NavController,
    public cartService: CartService
  ) {}

  ngOnInit(): void {
    this.loadCoursesCategories();
    this.loadCourseList();
    this.cartService.loadCart();
  }

  loadCoursesCategories() {
    this.endPointsService.getCourseCategories().subscribe({
      next: (res: CourseCategory[]) => {
        this.courseCategoriesList = res || [];
      },
    });
  }

  loadCourseList() {
    this.endPointsService.getCoursesList().subscribe({
      next: (res: Course[]) => {
        this.coursesList = res.slice(0, 4) || [];
        this.endPointsService.courses = res;
      },
    });
  }

  onPaginate(event: any) {
    setTimeout(() => {
      const startIndex = this.currentPage * this.coursesPerPage;
      const endIndex = startIndex + this.coursesPerPage;
      this.coursesList = this.coursesList.concat(
        this.endPointsService.courses.slice(startIndex, endIndex)
      );
      this.currentPage++;
      event.target.complete();
    }, 1000);
  }

  openCourseDetail(id: number) {
    this.navCtrl.navigateForward(`product-details/${id}`);
  }

  openCart() {
    this.navCtrl.navigateForward(`tabs/tab2`);
  }

  search(event: any) {
    this.goToSearch(event.target.value);
  }

  goToSearch(query: string) {
    this.navCtrl.navigateForward(`search-results/${query}`);
  }
}
