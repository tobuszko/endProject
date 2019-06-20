import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { StartComponent } from './start/start.component';
import { TeoriaComponent } from './teoria/teoria.component';
import { GryComponent } from './gry/gry.component';
import { WynikiComponent } from './wyniki/wyniki.component';
import { SnakeComponent } from './snake/snake.component';
import { NumbersComponent } from './numbers/numbers.component';
import { DigitsComponent } from './digits/digits.component';



const appRoutes: Routes = [
{path: 'start', component: StartComponent},
{path: 'teoria', component: TeoriaComponent},
{path: 'gry', component: GryComponent},
{path: 'wyniki', component: WynikiComponent},
{path: 'snake', component: SnakeComponent},
{path: 'numbers', component: NumbersComponent},
{path: 'digits', component: DigitsComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    StartComponent,
    TeoriaComponent,
    GryComponent,
    WynikiComponent,
    SnakeComponent,
    NumbersComponent,
    DigitsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
