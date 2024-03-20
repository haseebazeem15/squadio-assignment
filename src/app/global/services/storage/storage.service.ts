import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  private STORAGE_KEY = 'course_app_';

  constructor() {}

  saveObj(key: string, data: any) {
    localStorage.setItem(this.STORAGE_KEY + key, JSON.stringify(data));
  }

  getObj(key: string) {
    return (
      JSON.parse(localStorage.getItem(this.STORAGE_KEY + key) || null) || null
    );
  }

  removeObj(key: string) {
    localStorage.removeItem(this.STORAGE_KEY + key);
  }

  isExists(key: string) {
    return this.getObj(key) ? true : false;
  }
}
