import { Component,OnInit } from '@angular/core';
import {ShareImage} from "./models/share-image.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  mySnap!: ShareImage;
  ngOnInit() {
  this.mySnap = new ShareImage('Fan de Riri','Elle est trop choupie ma Riri, une beauté fatale',new Date(),
    "https://images.bfmtv.com/kk0M3WBv2bl9WQ1myfnwL7k1wOQ=/0x0:2048x1152/2048x0/images/Rihanna-lors-de-la-mi-temps-du-Superbowl-le-12-fevrier-2023-a-Glendale-dans-l-Arizona-aux-Etats-Unis-1576915.jpg",
    3050000,
    )
  }




}
