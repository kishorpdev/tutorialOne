import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';


import { AppComponent } from './app.component';
import { InsertCmpComponent } from './insert-cmp/insert-cmp.component';
import { FindCmpComponent } from './find-cmp/find-cmp.component';
import { UpdateCmpComponent } from './update-cmp/update-cmp.component';
import { RemoveCmpComponent } from './remove-cmp/remove-cmp.component';


@NgModule({
  declarations: [
    AppComponent,
    InsertCmpComponent,
    FindCmpComponent,
    UpdateCmpComponent,
    RemoveCmpComponent
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
