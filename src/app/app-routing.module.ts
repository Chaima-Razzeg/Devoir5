import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CosmetiquesComponent } from './cosmetiques/cosmetiques.component';
import { AddCosmetiqueComponent } from './add-cosmetique/add-cosmetique.component';
import { UpdateCosmetiqueComponent } from 'src/app/services/update-cosmetique/update-cosmetique.component';
const routes: Routes = [
{path: "cosmetiques", component : CosmetiquesComponent},
{path: "add-cosmetique", component : AddCosmetiqueComponent},
{ path: "", redirectTo: "cosmetiques", pathMatch: "full" },
{path: "updateCosmetique/:id", component: UpdateCosmetiqueComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
