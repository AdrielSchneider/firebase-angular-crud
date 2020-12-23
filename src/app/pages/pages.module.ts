import { NgModule } from '@angular/core';

import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { PagesRoutingModule } from './pages-routing.module';
import { TabelaCrudComponent } from './tabela-crud/tabela-crud.component';
import { TableModule } from 'primeng/table';
import { NbButtonModule, NbCardModule, NbInputModule, NbMenuModule, NbWindowModule } from '@nebular/theme';
import { InsereProdutoComponent } from './insere-produto/insere-produto.component';
import { WindowComponent } from './window/window.component';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    DashboardModule,
    TableModule,
    NbButtonModule,
    NbCardModule,
    NbWindowModule,
    NbInputModule,
    FormsModule,
    InputTextModule,
    FontAwesomeModule
  ],
  declarations: [
    PagesComponent,
    TabelaCrudComponent,
    InsereProdutoComponent,
    WindowComponent,
  ],
})
export class PagesModule {
}
