import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import {NgOptimizedImage, registerLocaleData} from '@angular/common';
import en from '@angular/common/locales/en';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NzLayoutModule} from "ng-zorro-antd/layout";
import {NzMenuModule} from "ng-zorro-antd/menu";
import {NzIconModule} from "ng-zorro-antd/icon";
import {NzFormModule} from "ng-zorro-antd/form";
import {NzInputModule} from "ng-zorro-antd/input";
import {NzButtonModule} from "ng-zorro-antd/button";
import {NzCardModule} from "ng-zorro-antd/card";
import {NzMessageModule} from "ng-zorro-antd/message";
import {NzListModule} from "ng-zorro-antd/list";
import { BulkMeterComponent } from './bulk-meter/bulk-meter.component';
import {NzUploadModule} from "ng-zorro-antd/upload";
import {NzTransferModule} from "ng-zorro-antd/transfer";
import {NzTableModule} from "ng-zorro-antd/table";
import {NzSwitchModule} from "ng-zorro-antd/switch";
import {NzTagModule} from "ng-zorro-antd/tag";

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    BulkMeterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzLayoutModule,
    NgOptimizedImage,
    NzMenuModule,
    NzIconModule,
    NzFormModule,
    NzInputModule,
    NzButtonModule,
    NzCardModule,
    ReactiveFormsModule,
    NzMessageModule,
    NzListModule,
    NzUploadModule,
    NzTransferModule,
    NzTableModule,
    NzSwitchModule,
    NzTagModule
  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
