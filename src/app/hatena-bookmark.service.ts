import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs';

import { EntryInfo } from './EntryInfo';
import { ProgressInterceptor } from './progress.interceptor';

@Injectable()
export class HatenaBookmarkService {
    constructor(private http: HttpClient){}

    private apiEndPoint: string = "http://b.hatena.ne.jp/entry/json/";

    getBookmarks(targetUrl:string): Observable<EntryInfo> {
        console.log(targetUrl);
        let httpParams = new HttpParams()
            .set("url", targetUrl);
        
        console.log(`${this.apiEndPoint}?${httpParams.toString()}`)
        return this.http.jsonp<EntryInfo>(`${this.apiEndPoint}?${httpParams.toString()}`, "callback");
    }
}
