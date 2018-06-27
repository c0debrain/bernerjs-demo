import { Component } from '@angular/core';

import {CameraResultType, Plugins} from '@capacitor/core';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  image: SafeResourceUrl;

  constructor(private domSantizer: DomSanitizer) {

  }

  async takePicture() {

    let { Camera } = Plugins;

    let img = await Camera.getPhoto({
      quality: 90,
      resultType: CameraResultType.Base64
    });

    this.image = this.domSantizer.bypassSecurityTrustResourceUrl(img && img.base64Data);

  }

}
