import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AboutUsComponent } from './about-us/about-us.component';
import { PricesComponent } from './prices/prices.component';
import { StartComponent } from './start/start.component';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolBarComponent } from './tool-bar/tool-bar.component';
import { FooterComponent } from './footer/footer.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule }   from '@angular/forms';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { InterceptorService } from './interceptor.service';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';

import { TokenInterceptorService } from './token-interceptor.service';



@NgModule({
  declarations: [
    AppComponent,
    ToolBarComponent,
    FooterComponent,
    ToolbarComponent,
    AboutUsComponent,
    PricesComponent,
    StartComponent,

   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatButtonToggleModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    MatProgressBarModule,
    MatSidenavModule,
    MatDividerModule,
 
 
    

  ],
  providers: [{provide:HTTP_INTERCEPTORS , useClass:TokenInterceptorService,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
