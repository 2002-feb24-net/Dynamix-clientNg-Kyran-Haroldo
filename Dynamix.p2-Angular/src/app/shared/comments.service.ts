import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  // const apiUrl = "https://localhost:44329/api"

  constructor(private _http: HttpClient) { }

  // getProducts (): Observable<Product[]> {
  //   return this._http.get<Product[]>(apiUrl)
  //     .pipe(
  //       tap(heroes => console.log('fetched products')),
  //       catchError(this.handleError('getProducts', []))
  //     );
  // }

  // getProduct(id: number): Observable<Product> {
  //   const url = `${apiUrl}/${id}`;
  //   return this._http.get<Product>(url).pipe(
  //     tap(_ => console.log(`fetched product id=${id}`)),
  //     catchError(this.handleError<Product>(`getProduct id=${id}`))
  //   );
  // }

  // addProduct (product): Observable<Product> {
  //   return this._http.post<Product>(apiUrl, product, httpOptions).pipe(
  //     tap((product: Product) => console.log(`added product w/ id=${product.id}`)),
  //     catchError(this.handleError<Product>('addProduct'))
  //   );
  // }

  // updateProduct (id, product): Observable<any> {
  //   const url = `${apiUrl}/${id}`;
  //   return this._http.put(url, product, httpOptions).pipe(
  //     tap(_ => console.log(`updated product id=${id}`)),
  //     catchError(this.handleError<any>('updateProduct'))
  //   );
  // }

  // deleteProduct (id): Observable<Product> {
  //   const url = `${apiUrl}/${id}`;

  //   return this._http.delete<Product>(url, httpOptions).pipe(
  //     tap(_ => console.log(`deleted product id=${id}`)),
  //     catchError(this.handleError<Product>('deleteProduct'))
  //   );
}
