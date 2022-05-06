import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GraphicsService {

  constructor(private http: HttpClient) { }

  getUserSocialNetwork() {
    const urlGraphic= "http://localhost:3000/grafica"
    return this.http.get(urlGraphic);
  }
}
