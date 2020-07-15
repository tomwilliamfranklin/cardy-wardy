import { NgModule } from '@angular/core';
import { NbAlertModule, NbCardModule, NbIconModule, NbPopoverModule, NbSearchModule } from '@nebular/theme';

import { ThemeModule } from '../../@theme/theme.module';
import { BrowseRoutingModule } from './browse-routing.module';
import { BrowseComponent } from './browse.component';
import { TypographyComponent } from './typography/typography.component';
import { CustomComponentsModule } from '../../components/custom-components.module';

const components = [
  BrowseComponent,
  TypographyComponent,
];

@NgModule({
  imports: [
    NbCardModule,
    NbPopoverModule,
    NbSearchModule,
    NbIconModule,
    NbAlertModule,
    ThemeModule,
    BrowseRoutingModule,
    CustomComponentsModule,
  ],
  declarations: [
    ...components,
  ],
})
export class BrowseModule { }
