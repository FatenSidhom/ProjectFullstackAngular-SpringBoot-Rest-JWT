import { Injectable } from '@angular/core';
import { HttpClientModule,HttpClient,HttpHeaders } from '@angular/common/http';
import { promotions } from '../models/promotions';
@Injectable({
  providedIn: 'root'
})
export class PromotionsService {

  urlPromo='http://localhost:3000/promotions';
  httpOptions = {
    headers: new HttpHeaders({
      'content-Type' : 'application/json'
    })
  }

  constructor(private http : HttpClient) { }
  getAllPromo() {
    return this.http.get<promotions[]>(this.urlPromo);
  }
  addPromo(p:promotions){
    return this.http.post(this.urlPromo, JSON.stringify(p), this.httpOptions);
  }
  deleteCategory(id:number){
    return this.http.delete<promotions>(`${this.urlPromo}/${id}`);
  }
  getById(id:number){
    return this.http.get<promotions>(`${this.urlPromo}/${id}`)
  }
  update(id:number, promo:promotions){
    return this.http.put<promotions>(`${this.urlPromo}/${id}`, JSON.stringify(promo),this.httpOptions);
   
  }
//   update(id:number, category:Category): Observable<Category> {
//     return this.http.put<Category>(`${this.apiUrl}/${id}`, JSON.stringify(category), this.httpOptions)
//     .pipe(
//       catchError(this.errorHandler)
//     )
//   }
//   getAllProducts():Observable<ProductCateg[]> {
//     return this.http.get<ProductCateg[]>(this.prodUrl)
    
 }
