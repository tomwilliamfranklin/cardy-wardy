import { NgModule } from '@angular/core';
import { NbAlertModule, NbCardModule, NbIconModule, NbPopoverModule, NbSearchModule } from '@nebular/theme';

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
  ],
  declarations: [
    CardsDisplayComponent,
  ],
})
export class CustomComponentsModule { }
