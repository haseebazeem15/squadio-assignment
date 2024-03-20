import { Component, OnInit } from '@angular/core';
import { EndpointsService } from './global/services/endpoint/endpoints.service';
import { Course } from './global/interfaces/course.interface';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private endpointService: EndpointsService) {}

  ngOnInit(): void {
    this.endpointService.getCoursesList().subscribe({
      next: (res: Course[]) => {
        this.endpointService.courses = res || [];
      },
    });
  }
}
