import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private showSecret = true;
  private i = 0;
  private clicks = [];

  private onClick() {
    this.i = this.i + 1;
    this.clicks.push(this.i);
    console.log(this.i);
    this.clicks.forEach((e) => console.log(e));
    this.showSecret = !this.showSecret;
  }
}
