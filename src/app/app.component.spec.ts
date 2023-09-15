import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'Test programme Achat'`, () => {
    expect(component.title).toEqual('Test programme Achat');
  });

  it('should calculate remise and coupures correctly', () => {
    // Simuler les données d'entrée
    component.prix = 61;
    component.sommePayee = 100;

    // Appeler la fonction de calcul
    component.calculerRemise();

    // Vérifier le résultat
    expect(component.remise).toBe(39);
    expect(component.coupures).toEqual(['10 Euros', '10 Euros', '10 Euros', '1 Euros']);
  });
});


