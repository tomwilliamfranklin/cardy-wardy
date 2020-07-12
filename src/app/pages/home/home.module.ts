import { NgModule } from '@angular/core';
import { NbAlertModule, NbCardModule, NbIconModule, NbPopoverModule, NbSearchModule,
  NbInputModule } from '@nebular/theme';

import { ThemeModule } from '../../@theme/theme.module';
import { UiFeaturesRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { GridComponent } from './grid/grid.component';

const components = [
  HomeComponent,
  GridComponent,
];

@NgModule({
  imports: [
    NbCardModule,
    NbPopoverModule,
    NbSearchModule,
    NbIconModule,
    NbAlertModule,
    ThemeModule,
    UiFeaturesRoutingModule,
    NbInputModule,
  ],
  declarations: [
    ...components,
  ],
})
export class HomeModule { }
