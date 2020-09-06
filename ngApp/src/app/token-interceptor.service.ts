import { Injectable } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor{

  // Make thee class implment the HttpInteerceeptorinterfce
  // We aveto defin anintercept meethod
  constructor() { }

  intercept(req, next) {
    let tokenizedReq = req.clone({
      setHeaders:  {
        Authorization: 'Bearer xx.yy.zz'
      }
    })
    return next.handle(tokenizedReq)
  }
}
