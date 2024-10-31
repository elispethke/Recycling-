import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-pickup-call-card',
  templateUrl: './pickup-call-card.component.html',
  styleUrls: ['./pickup-call-card.component.scss'],
})
export class PickupCallCardComponent  implements OnInit {
  @Input() hasHeader!: boolean;
  @Input() hasFooter!: boolean;
  @Input() status?: string;
  @Input() updatedAt?: string;
  @Input() createdAt?: string;
  @Input() notes?: string;
  @Input() value?: string;


  constructor(private router: Router) { }

  ngOnInit() {}
  goToPickupCalls() {
    this.router.navigate(['/pickup-calls']); // Realiza a navegação para a rota 'pickup-calls'
  }
}
