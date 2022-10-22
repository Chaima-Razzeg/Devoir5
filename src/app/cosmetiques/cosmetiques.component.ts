import { Component, OnInit } from '@angular/core';
import { Cosmetique } from '../model/cosmetique.model';
import { CosmetiqueService } from '../services/cosmetique.service';
@Component({
  selector: 'app-cosmetiques',
  templateUrl: './cosmetiques.component.html',
  styleUrls: ['./cosmetiques.component.css']
})
export class CosmetiquesComponent implements OnInit {
    cosmetiques : Cosmetique[]; //un tableau de Cosmetique
    constructor(private cosmetiqueService: CosmetiqueService ) {
this.cosmetiques = cosmetiqueService.listeCosmetiques();
}



  ngOnInit(): void {
  }
supprimerCosmetique(c: Cosmetique)
{
//console.log(c);
let conf = confirm("Etes-vous sûr ?");
if (conf)
this.cosmetiqueService.supprimerCosmetique(c);
}
}
