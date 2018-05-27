import { Component } from '@angular/core';
import { HatenaBookmarkService } from './hatena-bookmark.service';

import { EntryInfo } from './EntryInfo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  targetUrl = 'https://github.com/rinne-grid/tkoolmv_plugin_RecollectionMode'
  
  targetEntry: EntryInfo = null;
  loading: boolean = false;
  spinnerMode: string = "indeterminate";

  constructor(private hatenaService: HatenaBookmarkService){}
  getBookmark() {
    this.loading = true;
    console.log(this.targetUrl);
    this.hatenaService.getBookmarks(this.targetUrl).subscribe(
      (entries) => {
        this.targetEntry = entries;
        this.loading = false;
        console.log(entries);
      }
    );
  }
}
