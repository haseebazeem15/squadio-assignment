import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course } from 'src/app/global/interfaces/course.interface';
import { EndpointsService } from 'src/app/global/services/endpoint/endpoints.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.page.html',
  styleUrls: ['./search-results.page.scss'],
})
export class SearchResultsPage implements OnInit {
  searchedCourses: Course[];
  query: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private endpoints: EndpointsService
  ) {}

  ngOnInit() {
    this.query = this.activatedRoute.snapshot.paramMap.get('query');
    this.searchedCourses = this.searchCourses(this.query);
  }

  searchCourses(searchValue: string) {
    return this.endpoints.courses.filter((course) => {
      const searchText = searchValue.toLowerCase();
      const courseNameMatch = course.courseName
        .toLowerCase()
        .includes(searchText);
      const authorMatch = course.author.toLowerCase().includes(searchText);
      const tagsMatch = course.tags.some((tag) =>
        tag.toLowerCase().includes(searchText)
      );
      return courseNameMatch || authorMatch || tagsMatch;
    });
  }
}
