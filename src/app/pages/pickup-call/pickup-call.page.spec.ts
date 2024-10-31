import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PickupCallPage } from './pickup-call.page';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { Route, Router } from '@angular/router';

describe('PickupCallPage', () => {
  let component: PickupCallPage;
  let fixture: ComponentFixture<PickupCallPage>;
  let router: Router

  beforeEach(() => {
    fixture = TestBed.createComponent(PickupCallPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
    AppRoutingModule

    router = TestBed.get(Router);
  });

  it('should go to home on create new pickup call', () => {
    spyOn(router, 'navigate');

   component.newPickupCall()

    expect(router.navigate).toHaveBeenCalledWith(['home']);
  });
});
