// import { Injectable } from '@angular/core';
// import {
//   HttpRequest,
//   HttpHandler,
//   HttpEvent,
//   HttpInterceptor,
// } from '@angular/common/http';
// import { Observable } from 'rxjs';

// @Injectable()
// export class RapidApiInterceptor implements HttpInterceptor {
//   constructor() {}

//   intercept(
//     request: HttpRequest<unknown>,
//     next: HttpHandler
//   ): Observable<HttpEvent<unknown>> {
//     console.log('Before Intercept request', request);

//     const rapidApiHeaders = request.clone({
//       setHeaders: {
//         'x-rapidapi-key' : 'c1df0627famsh87981cdb03d8f72p1b3edbjsnea076f5a55a1',
//       'x-rapidapi-host' : 'yahoo-finance166.p.rapidapi.com'
//       },
//     });

//     console.log('after Intercept Request', rapidApiHeaders);

//     return next.handle(rapidApiHeaders);
//   }
// }
