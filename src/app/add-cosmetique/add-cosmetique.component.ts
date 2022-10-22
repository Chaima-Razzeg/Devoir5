import { Component, OnInit } from '@angular/core';
import { Cosmetique } from '../model/cosmetique.model';
import { CosmetiqueService } from '../services/cosmetique.service';
import { ActivatedRoute,Router } from '@angular/router';
@Component({
  selector: 'app-add-cosmetique',
  templateUrl: './add-cosmetique.component.html',
  styleUrls: ['./add-cosmetique.component.css']
})
export class AddCosmetiqueComponent implements OnInit {
newCosmetique = new Cosmetique();
constructor(private cosmetiqueService: CosmetiqueService,
  private router :Router, ) { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
addCosmetique(){
// console.log(this.newCosmetique);
this.cosmetiqueService.ajouterCosmetique(this.newCosmetique);
this.router.navigate(['cosmetiques']);
}
}
