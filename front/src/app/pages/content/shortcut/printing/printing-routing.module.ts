import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {PrintingComponent} from './printing.component';

const routes: Routes = [{
  path: '',
  component: PrintingComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class PrintingRoutingModule {
}
