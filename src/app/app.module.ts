import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';




import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MainComponent } from './components/main/main.component';
import { HerosComponent } from './components/heros/heros.component';
import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';
import { FileDropModule } from 'ngx-file-drop';
import { DragDropComponent } from './components/drag-drop/drag-drop.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    MainComponent,
    HerosComponent,
    HeroDetailComponent,
    DragDropComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    HttpClientModule,
    FileDropModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
