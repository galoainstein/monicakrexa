import { Component, Input, OnInit } from '@angular/core';

import { ScssImportsService } from '../../services/scss-imports.service';

@Component({
  selector: 'app-text-button',
  templateUrl: './text-button.component.html',
  styleUrls: ['./text-button.component.scss']
})
export class TextButtonComponent implements OnInit {

  @Input() text: string;
  @Input() color: string = 'white';
  @Input() background: string = 'green';
  @Input() id: string;

  private textButton: HTMLButtonElement

  constructor(
    private scssImportsService: ScssImportsService
  ) { }

  ngOnInit(): void {
    this.textButton = document.querySelector(`#${this.id}>button.text`) as HTMLButtonElement;

    this.textButton.style.backgroundColor = this.getColors().background;
    this.textButton.style.color = this.getColors().color;
    
    this.textButton.addEventListener('mouseenter', () => {
      this.textButton.style.backgroundColor = this.getColors().color;
      this.textButton.style.color = this.getColors().background;
    })
    this.textButton.addEventListener('mouseleave', () => {
      this.textButton.style.backgroundColor = this.getColors().background;
      this.textButton.style.color = this.getColors().color;
    })

    console.log(this.getColors());
  }

  private getColors(): {background: string, color: string} {
    const colors = this.scssImportsService.getScssImports();
    type ObjectKey = keyof typeof colors;
    const background = colors[`${this.background}Primary` as ObjectKey];
    const color = colors[`${this.color}Primary` as ObjectKey];
    return {'background': background, 'color': color};
  }
}
