import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PackService {

  inserturl =   "http://localhost:9002/insertpackages";
  updateurl =   "http://localhost:9002/updatePackages";
  deleteurl =   "http://localhost:9002/deletePackages";
  viewurl =   "http://localhost:9002/viewPackages";
  constructor (private h1 : HttpClient) { }
  insertservice(data:any)
  {
    return this.h1.post(this.inserturl,data);
  }
  updateservice(data:any)
  {
    return this.h1.post(this.updateurl,data);
  }
  deleteservice(data:any)
  {
    return this.h1.post(this.deleteurl,data);
  }
viewservice()
{
  return this.h1.get(this.viewurl);
}

}
