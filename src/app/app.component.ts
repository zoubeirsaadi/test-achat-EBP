import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = 'Test programme Achat';
  prix: number = 0;  // Purchase price
  sommePayee: number = 0;  // The amount paid by the customer
  remise: number = 0;  // The amount to be returned
  coupures: string[] = [];  // The cuts to be returned

  /*
  Method to calculate discount and cuts
  */
  calculerRemise() {
    this.remise = this.sommePayee - this.prix;
    this.coupures = [];
  
    let montantRestant = this.remise;
  
    const coupuresPossibles = [10, 5, 1];
  
    for (const coupure of coupuresPossibles) {
      const count = Math.floor(montantRestant / coupure);
      if (count > 0) {
        for (let i = 0; i < count; i++) {
          this.coupures.push(`${coupure} Euros`);
        }
        montantRestant %= coupure;  // Update montantRestant
      }
    }
  }
  
}
