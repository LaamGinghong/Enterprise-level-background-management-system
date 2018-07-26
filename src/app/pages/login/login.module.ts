import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginComponent} from './login.component';
import {LoginRoutingModule} from './login-routing.module';
import {NzButtonModule, NzCheckboxModule, NzInputModule, NzMessageService, NzTabsModule} from 'ng-zorro-antd';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule,
    FormsModule,
    NzTabsModule,
    NzInputModule,
    NzButtonModule,
    NzCheckboxModule
  ],
  declarations: [LoginComponent],
  providers: [NzMessageService]
})
export class LoginModule {
}
