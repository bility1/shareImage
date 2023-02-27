import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-share-image',
  templateUrl: './share-image.component.html',
  styleUrls: ['./share-image.component.scss']
})
export class ShareImageComponent implements OnInit{
      title!: string;
      description!: string;
      createdDate!: Date;
      snaps!: number;
      imagesUrl!: string;
      buttonText!: string;
      ngOnInit() {
        this.title ='Fan de Riri';
        this.description ='Elle est trop choupie ma Riri, une beauté fatale';
        this.createdDate = new Date();
        this.snaps = 3050000;
        this.imagesUrl ="https://images.bfmtv.com/kk0M3WBv2bl9WQ1myfnwL7k1wOQ=/0x0:2048x1152/2048x0/images/Rihanna-lors-de-la-mi-temps-du-Superbowl-le-12-fevrier-2023-a-Glendale-dans-l-Arizona-aux-Etats-Unis-1576915.jpg";
        this.buttonText ="Like";
      }
      onAddsnap(){
        this.snaps++;
}
      onSnap(){
        // @ts-ignore
        if(this.buttonText ==="Like"){
          this.onAddsnap();
          this.buttonText="j'aime";
        }else{
          this.snaps--;
          this.buttonText="Like"; 
        }
      }
}
