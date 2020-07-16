import { NgModule } from '@angular/core';
import { NbAlertModule, NbCardModule, NbIconModule, NbPopoverModule, NbSearchModule, NbButtonModule } from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { CardsDisplayComponent } from './cards-display/cards-display.component';

@NgModule({
  exports: [
    CardsDisplayComponent,
  ],
  imports: [
    NbCardModule,
    NbPopoverModule,
    NbSearchModule,
    NbIconModule,
    NbAlertModule,
    ThemeModule,
    NbButtonModule,
  ],
  declarations: [
    CardsDisplayComponent,
  ],
})
export class CustomComponentsModule { }
