import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CosmetiquesComponent } from './cosmetiques/cosmetiques.component';
import { AddCosmetiqueComponent } from './add-cosmetique/add-cosmetique.component';
import { FormsModule } from '@angular/forms';
import { UpdateCosmetiqueComponent } from './services/update-cosmetique/update-cosmetique.component';
@NgModule({
  declarations: [
    AppComponent,
    CosmetiquesComponent,
    AddCosmetiqueComponent,
    UpdateCosmetiqueComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
