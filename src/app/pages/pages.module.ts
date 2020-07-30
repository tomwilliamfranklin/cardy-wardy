import { NgModule } from '@angular/core';
import { NbMenuModule, NbCardModule, NbUserModule, NbIconModule } from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';
import { CreateComponent } from './create/create.component';
import { BrowseComponent } from './browse/browse.component';
import { CustomComponentsModule } from '../components/custom-components.module';

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    MiscellaneousModule,
    NbCardModule,
    CustomComponentsModule,
    NbUserModule,
    NbIconModule,
  ],
  declarations: [
    PagesComponent,
    CreateComponent,
    BrowseComponent,
  ],
})
export class PagesModule {
}
