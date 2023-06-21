import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GifsRoutingModule } from './gifs-routing.module';
import { MainGifsComponent } from './main-gifs/main-gifs.component';
import { MoleculesModule } from '@app/shared/components/molecules/molecules.module';
import { GifsHomePageComponent } from './pages/gifs-home-page/gifs-home-page.component';
import { GifsSearchBoxComponent } from './components/gifs-search-box/gifs-search-box.component';
import { GifsSidebarComponent } from './components/gifs-sidebar/gifs-sidebar.component';
import { GifsListComponent } from './components/gifs-list/gifs-list.component';


@NgModule({
  declarations: [
    MainGifsComponent,
    GifsHomePageComponent,
    GifsSearchBoxComponent,
    GifsSidebarComponent,
    GifsListComponent,
  ],
  imports: [
    CommonModule,
    GifsRoutingModule,
    MoleculesModule,
  ]
})
export class GifsModule { }
