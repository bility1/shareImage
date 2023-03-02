import { Component, OnInit,Input } from '@angular/core';
import {ShareImage} from "../models/share-image.model";


@Component({
  selector: 'app-share-image',
  templateUrl: './share-image.component.html',
  styleUrls: ['./share-image.component.scss']
})
export class ShareImageComponent implements OnInit{

  @Input() shareImage!: ShareImage;

      buttonText!: string;
      ngOnInit() {
        this.buttonText ="Like";
      }
      onSnap(){
        // @ts-ignore
        if(this.buttonText ==="Like"){
          this.shareImage.snaps++;
          this.buttonText="j'aime";
        }else{
          this.shareImage.snaps--;
          this.buttonText="Like";
        }
      }
}
