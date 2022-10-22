import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { CosmetiqueService } from '../cosmetique.service';
import { Cosmetique } from '../../model/cosmetique.model';
@Component({
  selector: 'app-update-cosmetique',
  templateUrl: './update-cosmetique.component.html',
  styles: []
})
export class UpdateCosmetiqueComponent implements OnInit {
  currentCosmetique = new Cosmetique();

  constructor(private activatedRoute: ActivatedRoute,

    private router :Router,
    private cosmetiqueService: CosmetiqueService) { }

  ngOnInit(): void {
    // console.log(this.route.snapshot.params.id);
this.currentCosmetique = this.cosmetiqueService.consulterCosmetique(this.activatedRoute.snapshot. params['id']);
console.log(this.currentCosmetique);
  }
  updateCosmetique()
{ //console.log(this.currentCosmetique);
  this.cosmetiqueService.updateCosmetique(this.currentCosmetique);
  this.router.navigate(['cosmetiques']);
}

}
