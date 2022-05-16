import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PathScrollService {

  private navbarToggler: any;
  private pagesList: any;

  constructor(
    private readonly router: Router,
    private http: HttpClient
  ) { }

  public setVariables(){
    const scrollEnd = Math.max(
      document.body.scrollHeight, document.documentElement.scrollHeight,
      document.body.offsetHeight, document.documentElement.offsetHeight,
      document.body.clientHeight, document.documentElement.clientHeight
    );
    this.navbarToggler = document.querySelector('.navbar-toggler')!
    this.pagesList = {
      'artist': 470/3554 * scrollEnd,
      'sustainability': 1000/3554 * scrollEnd,
      'color': 1650/3554 * scrollEnd,
      'world': 3020/3554 * scrollEnd,
      'end': scrollEnd
    }
  }

  public isSelected(page:string){
    if(window.location.pathname.includes('/'+page)){
      return 'selected'
    }
    this.setVariables()
    const pageIndex = Object.keys(this.pagesList).indexOf(page)
    const nextPage = Object.keys(this.pagesList)[pageIndex+1]
    const before = this.pagesList[page]
    const after = this.pagesList[nextPage]
    if(before <= document.documentElement.scrollTop && after > document.documentElement.scrollTop){
      return "selected"
    }
    return ""
  }

  public scrollTo(page:string){
    this.setVariables()
    if (this.router.url !== '/') {
      this.router.navigate(['/']) 
      setTimeout(()=>{
        this.scrollTo(page)
      }, 500); 
    } else {
      const link = document.getElementById(page)!
      link.classList.add("force-selected")
      document.documentElement.scrollTop = this.pagesList[page]
      if(this.navbarToggler.getAttribute("aria-expanded")=='true'){
        this.navbarToggler.click()
      }
      setTimeout(()=>{
        link.classList.remove("force-selected")
      }, 2000);
      for (let i = 0; i < Object.keys(this.pagesList).length -1; i++) {
        const key = Object.keys(this.pagesList)[i]
        const link = document.getElementById(key)!
        if(key != page){
          link.classList.remove("selected")
          link.classList.remove("force-selected")
        }
      }
    }
  }

}
