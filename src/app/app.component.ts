import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public canvasParam;

  ngOnInit() {
    this.canvasParam = 1;

    window.setInterval(() => {
      this.canvasParam++;
    }, 1000);
  }
}
