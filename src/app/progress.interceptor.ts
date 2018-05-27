import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { Injectable } from '@angular/core';
import { 
    HttpClient, 
    HttpInterceptor, 
    HttpHandler, 
    HttpRequest, 
    HttpResponse,
    HttpEvent, 
    HttpEventType 
} from '@angular/common/http';

import { HatenaBookmarkService } from './hatena-bookmark.service';

@Injectable()
export class ProgressInterceptor implements HttpInterceptor {
    constructor(private hatenaBookmarkService: HatenaBookmarkService) {}
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log("interceptor開始");
        return next.handle(request).pipe(
            tap(event => {
                console.log("tap");
                if(event instanceof HttpResponse) {
                    console.log("HttpResponse開始")
                }
            })

        )
    }
}
