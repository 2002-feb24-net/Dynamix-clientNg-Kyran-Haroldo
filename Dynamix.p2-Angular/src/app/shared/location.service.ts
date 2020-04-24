import { Location } from './location.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  formData : Location;
  list: Location[];
  readonly rootURL = "https://dynamix.azurewebsites.net/api"

  constructor(private _http: HttpClient) { }

  refreshList(){
    // this._http.get(this.rootURL+'/Locations')
    // .toPromise().then(res => this.list = res as Location[]);
    return this._http.get<Location[]>(this.rootURL+'/Locations');
  }

  async postLocations(formData: Location){
    return this._http.post(this.rootURL+'/Locations',formData);
  }

  async updateLocation(formData : Location){
    return this._http.put(this.rootURL+'/Locations/'+formData.LocationID,formData);

   }

   async deleteLocation(id : number){
    return this._http.delete(this.rootURL+'/Locations/'+id);
   }

   async getLocation(username:string) {
    return this._http.get<Location[]> (
      this.rootURL+"/Locations"+username,httpOptions).toPromise();
  }

  async addLocation(user:Location) {
    console.log(user);
    return this._http.post<Location> (
      this.rootURL,JSON.stringify(user),httpOptions).toPromise();
  }
}
