import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomePage } from './home.page';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { Route, Router } from '@angular/router';

describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;
  let router: Router

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
    AppRoutingModule
    router = TestBed.get(Router);
  });

  it('should go to pickup-calls on see all', () => {
    spyOn(router, 'navigate');
    component.goToPickupCalls();
    expect(router.navigate).toHaveBeenCalledWith(['pickup-calls']);
  });

  it('should go to new pickup call on create pickup call', () => {
    spyOn(router, 'navigate');
    component.newPickupCall()
    expect(router.navigate).toHaveBeenCalledWith(['pickup-call']);
  });
});
