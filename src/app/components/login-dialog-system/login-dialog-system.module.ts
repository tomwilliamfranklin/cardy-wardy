import { NgModule } from '@angular/core';
import { NbAlertModule, NbCardModule, NbIconModule, NbPopoverModule, NbSearchModule, NbButtonModule, NbInputModule } from '@nebular/theme';
import { ThemeModule } from '../../@theme/theme.module';
import { LoginComponent } from './login-dialog/login.component';
@NgModule({
  exports: [
    LoginComponent,
  ],
  imports: [
    NbCardModule,
    ThemeModule,
    NbInputModule,
    NbButtonModule,
  ],
  declarations: [
    LoginComponent,
  ],
})
export class LoginDialogSystemModule { }
