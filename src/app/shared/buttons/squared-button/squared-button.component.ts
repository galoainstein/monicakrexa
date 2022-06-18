import { Component, Input, OnInit } from '@angular/core';

import { ScssImportsService } from '../../services/scss-imports.service';

@Component({
  selector: 'app-squared-button',
  templateUrl: './squared-button.component.html',
  styleUrls: ['./squared-button.component.scss']
})
export class SquaredButtonComponent implements OnInit {

  @Input() icon: string;
  @Input() color: string = 'white';
  @Input() background: string = 'green';
  @Input() id: string;

  private squaredButton: HTMLButtonElement

  constructor(
    private scssImportsService: ScssImportsService
  ) { }

  ngOnInit(): void {
    this.squaredButton = document.querySelector(`#${this.id}>button.squared`) as HTMLButtonElement;
    // console.log(this.squaredButton.innerHTML)
    this.squaredButton.innerHTML = this.getIcons();

    this.squaredButton.style.backgroundColor = this.getColors().background;
    this.squaredButton.style.color = this.getColors().color;
    
    this.squaredButton.addEventListener('mouseenter', () => {
      this.squaredButton.style.backgroundColor = this.getColors().hover;
    })
    this.squaredButton.addEventListener('mouseleave', () => {
      this.squaredButton.style.backgroundColor = this.getColors().background;
    })

    console.log(this.getColors());
  }

  private getIcons(): string{
    const icons = {
      'next': `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
  </svg>`,
      'view': `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
      <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
      <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
    </svg>`
    }
    if (icons.hasOwnProperty(this.icon)){
      type ObjectKey = keyof typeof icons;
      return icons[this.icon as ObjectKey];
    }
    return '';
  }

  private getColors(): {background: string, hover: string, color: string} {
    const colors = this.scssImportsService.getScssImports();
    type ObjectKey = keyof typeof colors;
    const background = colors[`${this.background}Primary` as ObjectKey];
    const hover = colors[`${this.background}Secondary` as ObjectKey];
    const color = colors[`${this.color}Primary` as ObjectKey];
    return {'background': background, 'hover': hover, 'color': color};
  }
}
