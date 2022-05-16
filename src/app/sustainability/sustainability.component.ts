import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sustainability',
  templateUrl: './sustainability.component.html',
  styleUrls: ['./sustainability.component.scss']
})
export class SustainabilityComponent implements OnInit {

  i = 1
  artisanal: any;
  chemical: any;
  mechanical: any;
  light: any;
  recicle: any;
  water: any;
  iconsArray: any[] = [];

  constructor() { }

  ngOnInit(): void {
    this.artisanal = document.querySelector('#artisanal')!.querySelector('.top')!
    this.chemical = document.querySelector('#chemical')!.querySelector('.top')!
    this.mechanical = document.querySelector('#mechanical')!.querySelector('.top')!
    this.light = document.querySelector('#light')!.querySelector('.top')!
    this.recicle = document.querySelector('#recicle')!.querySelector('.top')!
    this.water = document.querySelector('#water')!.querySelector('.top')!
    this.iconsArray = [this.artisanal, this.chemical, this.mechanical, this.light, this.recicle, this.water]
    setInterval(() => {
      this.nextIcon(); 
      }, 2500)
  }


  private nextIcon(){
    this.iconsArray[this.i].classList.add('hover')
    this.iconsArray[this.i==0?this.iconsArray.length-1: this.i - 1].classList.remove('hover')
    this.i = (this.i + 1)%this.iconsArray.length
  }
}