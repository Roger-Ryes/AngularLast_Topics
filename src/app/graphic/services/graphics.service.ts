import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GraphicsService {

  constructor(private http: HttpClient) { }

  getUserSocialNetwork() {
    const urlGraphic= "http://localhost:3000/grafica"
    return this.http.get(urlGraphic);
  }

  getUserSocialNetworkDonutData(){
    return this.getUserSocialNetwork()
            .pipe(
              delay(1500),
              map( data =>{ 
                const label = Object.keys(data);
                const dataset = Object.values(data);
                return {label, dataset};
               })
            )
  }
}
