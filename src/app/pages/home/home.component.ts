import { Component } from '@angular/core';
import { QRCodeComponent } from 'angularx-qrcode';

@Component({
  selector: 'app-home',
  standalone:true,
  imports: [QRCodeComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {


  public myAngularxQrCode: string ;
  constructor () {
    // assign a value
    this.myAngularxQrCode = 'http://192.168.0.27:50428/birth-certificate';
  }
  
}
