import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RiceComponent } from './budget/rice.component';
import { SubsidyComponent } from './subsidy/subsidy.component';
import {ReactiveFormsModule} from "@angular/forms";
import { SaltComponent } from './salt/salt.component';
import { OilComponent } from './oil/oil.component';
import { DhalComponent } from './dhal/dhal.component';
import { PaasiParuppuComponent } from './paasi-paruppu/paasi-paruppu.component';
import { KondaKadalaiComponent } from './konda-kadalai/konda-kadalai.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    RiceComponent,
    SubsidyComponent,
    SaltComponent,
    OilComponent,
    DhalComponent,
    PaasiParuppuComponent,
    KondaKadalaiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
