import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
  HttpParams,
  HttpRequest,
  HttpEvent,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { CourseCategory } from '../../interfaces/course-category.interface';
import { Course } from '../../interfaces/course.interface';

@Injectable({
  providedIn: 'root',
})
export class EndpointsService {
  private COURSE_CATEGORIES_URL = '/assets/data/course-categories.json';
  private COURSE_LIST_URL = '/assets/data/course-list.json';
  public courses: Course[];

  constructor(private http: HttpClient) {}

  getCourseCategories(): Observable<CourseCategory[]> {
    return this.http.get<CourseCategory[]>(this.COURSE_CATEGORIES_URL);
  }

  getCoursesList(): Observable<Course[]> {
    return this.http.get<Course[]>(this.COURSE_LIST_URL);
  }

  getCourseById(id: number): Course | null {
    const course = this.courses?.filter((item) => item.id === id) || [];
    return course.length > 0 ? course[0] : null;
  }
}
