import { Component, ElementRef, Inject, OnInit, Renderer2, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { AppComponent } from '../app.component';
import { DialogData } from '../projects';

@Component({
  selector: 'app-dialog-detail',
  templateUrl: './dialog-detail.component.html',
  styleUrls: ['./dialog-detail.component.scss']
})

export class DialogDetailComponent extends AppComponent {
  @ViewChild('videoIframe', { static: false }) iframe!: ElementRef;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private renderer: Renderer2,
    public override _ActivatedRoute: ActivatedRoute
  ) {
    super(_ActivatedRoute);
  }

  ngAfterViewInit() {
    const iframe = this.iframe.nativeElement;
    
    iframe.onload = () => {
      try {
        const iframeDocument = iframe.contentDocument || iframe.contentWindow?.document;
        
        if (!iframeDocument) {
          console.error('Unable to access iframe document.');
          return;
        }

        const videoElement = iframeDocument.querySelector('video');
        
        if (videoElement) {
          this.renderer.setStyle(videoElement, 'width', '100%');
          this.renderer.setStyle(videoElement, 'object-fit', 'fill');
        }
      } catch (error) {
        console.error('Error accessing iframe content:', error);
      }
    };
  }
}
