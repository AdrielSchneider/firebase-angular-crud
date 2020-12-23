import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NbButtonModule, NbCardModule } from '@nebular/theme';

import { ThemeModule } from '../../@theme/theme.module';
import { DashboardComponent } from './dashboard.component';

@NgModule({
  imports: [
    CommonModule,
    NbCardModule,
    ThemeModule,    
    NbButtonModule,
  ],
  declarations: [
    DashboardComponent,
  ]
})
export class DashboardModule { }
