import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpContext, //context
  HttpContextToken //context
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs';

const CHECK_TIME = new HttpContextToken<boolean>(() => false);

//function que habilita o no el context para este interceptor
export function checkTime() {
  return new HttpContext().set(CHECK_TIME, true);
}

@Injectable()
export class TimeInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    if(request.context.get(CHECK_TIME)) {
      const start = performance.now(); //performance es del navegador

      return next.handle(request)
        .pipe(
          //ejecutar codigo sin afectar la data
          tap(() => {
            const time = (performance.now() -start) + 'ms';
            console.log(request.url, time)
          })
        )
    }

    return next.handle(request)

  }
}
