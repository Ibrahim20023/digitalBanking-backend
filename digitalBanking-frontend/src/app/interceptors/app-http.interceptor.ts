import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {inject, Injectable} from "@angular/core";
import {AuthService} from "../services/auth.service";
import {Observable} from "rxjs";

@Injectable()
export class appHttpInterceptor implements HttpInterceptor{
  constructor(private authService:AuthService) {
  }
  intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log("*****")
    console.log(req.url);
    if (!req.url.includes("/auth/login")){
      let newReq = req.clone({
        headers: req.headers.set('Authorization', 'Bearer '+this.authService.accessToken)
      })
      return next.handle(newReq);
    }else return next.handle(req);
  }

}
