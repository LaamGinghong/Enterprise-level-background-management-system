import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {QRComponent} from './qr.component';

const routes: Routes = [{
  path: '',
  component: QRComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class QrRoutingModule {
}
