import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponse, Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})

export class NetworkService {

  constructor(private httpClient: HttpClient) { }

  getListNames(): Observable<ListResponse[]>{
    return  this.httpClient.get<ListResponse[]>(`http://localhost:1150/ListStudentCheck`)
  }

  postCheckName(product: Product): Observable<Product> {
    return this.httpClient.post<Product>(`http://localhost:1150/CheckName`, product, {

    })
  }
  /*getProductImageURL(image: string): string {
    if (image) {
      return ${environment.baseURL}images/${image}
    }
    return 'assets/images/no_photo.jpg'
  }*/

  makeFormData(product: Product): FormData {
    const formData = new FormData()
    formData.append('name', product.name)
    formData.append('id', `${product.id}`)
    formData.append('subject', `${product.subject}`)
    formData.append('photo', product.photo)
    return formData
  }



}
