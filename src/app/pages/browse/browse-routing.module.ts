import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BrowseComponent } from './browse.component';
import { TypographyComponent } from './typography/typography.component';

const routes: Routes = [{
  path: '',
  component: BrowseComponent,
  children: [{
    path: 'typography',
    component: TypographyComponent,
  }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BrowseRoutingModule { }
