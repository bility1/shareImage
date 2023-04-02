import { Component, OnInit } from '@angular/core';
import { ShareImage } from '../models/share-image.model';
import { ShareImagesService } from '../services/share-images.service';


@Component({
  selector: 'app-share-image-list',
  templateUrl: './share-image-list.component.html',
  styleUrls: ['./share-image-list.component.scss']
})
export class ShareImageListComponent implements OnInit{
  faceSnaps!: ShareImage[];
constructor(private shareImagesService: ShareImagesService){}

  ngOnInit(): void {
    this.faceSnaps  = this.shareImagesService.faceSnaps  }

}
