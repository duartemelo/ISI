import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ViewTitlesComponent} from './view-titles/view-titles.component'

const routes: Routes = [
  {path: '', component: ViewTitlesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
