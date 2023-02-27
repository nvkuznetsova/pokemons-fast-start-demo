import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPokemonsListComponent } from './my-pokemons-list.component';

describe('MyPokemonsListComponent', () => {
  let component: MyPokemonsListComponent;
  let fixture: ComponentFixture<MyPokemonsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyPokemonsListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyPokemonsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
