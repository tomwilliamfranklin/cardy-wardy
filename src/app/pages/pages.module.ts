import { NgModule } from '@angular/core';
import { NbMenuModule, NbCardModule, NbUserModule, NbIconModule, NbInputModule, NbButtonModule } from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';
import { CreateComponent } from './create/create.component';
import { BrowseComponent } from './browse/browse.component';
import { CustomComponentsModule } from '../components/custom-components.module';
import { FormsModule } from '@angular/forms';

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
    NbInputModule,
    NbButtonModule,
    FormsModule,
  ],
  declarations: [
    PagesComponent,
    CreateComponent,
    BrowseComponent,
  ],
})
export class PagesModule {
}
