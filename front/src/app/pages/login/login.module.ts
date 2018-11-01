import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login-routing.module';
import { FormsModule } from '@angular/forms';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { LoginDirective } from './login.directive';

@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule,
    FormsModule,
    NgZorroAntdModule
  ],
  declarations: [LoginComponent, LoginDirective]
})
export class LoginModule {
}
