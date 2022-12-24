import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  constructor(
    private matIconRegistry:MatIconRegistry,
    private domSanitizer:DomSanitizer)
    {
      matIconRegistry.addSvgIcon(
        'facebook',
      domSanitizer.bypassSecurityTrustResourceUrl('../assets/svg/facebook-f.svg')
      );
      
      matIconRegistry.addSvgIcon(
      'twitter',
      domSanitizer.bypassSecurityTrustResourceUrl('../assets/svg/twitter.svg')
      )
      matIconRegistry.addSvgIcon(
        'linked',
        domSanitizer.bypassSecurityTrustResourceUrl('../assets/svg/linkedin-in.svg')
      )
      matIconRegistry.addSvgIcon(
          'global',
          domSanitizer.bypassSecurityTrustResourceUrl('../assets/svg/globe-solid.svg')
      )  
  }

}
