import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor() {
    const bn: ethers.BigNumber = ethers.utils.bigNumberify(1);
    console.log(`BigNumber=`, bn);
  }

}
