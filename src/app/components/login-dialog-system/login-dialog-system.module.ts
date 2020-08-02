import { NgModule } from '@angular/core';
import { NbAlertModule, NbCardModule, NbIconModule, NbPopoverModule, NbSearchModule, NbButtonModule, NbInputModule } from '@nebular/theme';
import { ThemeModule } from '../../@theme/theme.module';
import { LoginComponent } from './login-dialog/login.component';
import { FormsModule } from '@angular/forms';
import { SignupComponent } from './signup-dialog/signup.component';
@NgModule({
  exports: [
    LoginComponent,
    SignupComponent,
  ],
  imports: [
    NbCardModule,
    ThemeModule,
    NbInputModule,
    NbButtonModule,
    FormsModule,
  ],
  declarations: [
    LoginComponent,
    SignupComponent,
  ],
})
export class LoginDialogSystemModule { }
