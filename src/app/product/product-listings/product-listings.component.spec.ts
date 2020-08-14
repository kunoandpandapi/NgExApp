import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductListingsComponent } from './product-listings.component';
import { HttpClientTestingModule } from  '@angular/common/http/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('ProductListingsComponent', () => {
  let component: ProductListingsComponent;
  let fixture: ComponentFixture<ProductListingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductListingsComponent ],
      imports: [ HttpClientTestingModule ],
      schemas: [
        NO_ERRORS_SCHEMA
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductListingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
