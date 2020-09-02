import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material/material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { PiechartComponent } from './piechart/piechart.component';
import { ChartsModule } from 'ng2-charts';
import { UsertableComponent } from './usertable/usertable.component';
import { MatTableModule } from '@angular/material/table';
import { HierarchicalstructueComponent } from './hierarchicalstructue/hierarchicalstructue.component';
import { MatIconModule } from '@angular/material/icon';
import { MatTreeModule } from '@angular/material/tree';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonService } from './common.service';

@NgModule({
  declarations: [
    AppComponent,
    PiechartComponent,
    UsertableComponent,
    HierarchicalstructueComponent,
    NavbarComponent,
  ],
  entryComponents: [UsertableComponent, HierarchicalstructueComponent, PiechartComponent],
  imports: [
    MaterialModule,
    ReactiveFormsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    FormsModule,
    ChartsModule,
    MatTableModule,
    MatIconModule,
    MatTreeModule,
    MatToolbarModule,
  ],
  providers: [CommonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
