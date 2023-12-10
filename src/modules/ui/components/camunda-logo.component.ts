import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ui-camunda-logo',
  template: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 309.23 309.23" [attr.width]="size" [attr.height]="size">
      <defs><style>.cls-1{fill:#fc5d0d;}</style></defs>
      <path d="M154.44,200.8c23.49,0,35.58-13.85,35.76-38.22V142.43H167.59v21.73c0,10.87-4.74,14.73-12.45,14.73-7.54,0-12.45-3.86-12.45-14.73V82c0-10.87,4.74-15.08,12.45-14.9,7.54,0,12.45,4.2,12.45,15.07V98.43H190.2V83.7c0-24.37-12.1-38.21-35.59-38.21S119,59.33,118.85,83.7v79.06C118.85,186.78,131,200.8,154.44,200.8Z"/>
      <rect class="cls-1" x="118.85" y="223.06" width="71.35" height="40.32"/>
    </svg>
  `
})
export class UiCamundaLogoComponent implements OnInit {

  @Input() size: number = 50;

  constructor() { }

  ngOnInit(): void { }
}
