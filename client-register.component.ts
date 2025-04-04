import { Component } from '@angular/core';
import { ClientService } from '../services/client.service';

@Component({
  selector: 'app-client-register',
  templateUrl: './client-register.component.html',
  styleUrls: ['./client-register.component.css']
})
export class ClientRegisterComponent {
  client = { name: '', email: '', phone: '' };

  constructor(private clientService: ClientService) { }

  registerClient() {
    this.clientService.createClient(this.client).subscribe(response => {
      console.log('Cliente cadastrado com sucesso!', response);
    });
  }
}
