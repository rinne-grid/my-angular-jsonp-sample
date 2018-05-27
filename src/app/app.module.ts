import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClientJsonpModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { 
  MatInputModule, 
  MatButtonModule,
  MatCheckboxModule,
  MatMenuModule,
  MatIconModule,
  MatGridListModule,
  MatToolbarModule,
  MatExpansionModule,
  MatSidenavModule,
} from '@angular/material';

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { AppComponent } from './app.component';
import { HatenaBookmarkService } from './hatena-bookmark.service';
import { ProgressInterceptor } from './progress.interceptor';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    // @angular/core
    BrowserModule,
    HttpClientModule,
    HttpClientJsonpModule,
    BrowserAnimationsModule,
    FormsModule,

    // @angular/material
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    MatMenuModule,
    MatIconModule,
    MatGridListModule,
    MatToolbarModule,
    MatExpansionModule,
    MatSidenavModule,
    MatProgressSpinnerModule,
  ],
  providers: [
    HatenaBookmarkService,
    {
      provide: HTTP_INTERCEPTORS, 
      useClass: ProgressInterceptor,
      multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
