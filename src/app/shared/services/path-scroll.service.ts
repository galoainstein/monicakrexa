import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PathScrollService {

  private pagesList = ['artist', 'sustainability', 'color', 'world', 'shopkeepers']

  constructor(
    private readonly router: Router,
  ) { }

  public isSelected(page:string){
    if(window.location.pathname.includes('/'+page)){
      return 'selected'
    } else if (window.location.pathname != '/'){
      return ''
    }
    const startHeight = this.calculateYOffset(page)
    const nextPage = this.pagesList[this.pagesList.indexOf(page)+1]
    const endHeight = this.calculateYOffset(nextPage)
    if(startHeight <= document.documentElement.scrollTop && endHeight > document.documentElement.scrollTop){
      return "selected"
    }
    return ""
  }

  public scrollTo(page:string){
    if (this.router.url !== '/') {
      
      this.router.navigate(['/']) 
      setTimeout(()=>{
        this.scrollTo(page)
      }, 500);

    } else {

      this.addForceSelection(page)

      const y = this.calculateYOffset(page)
      window.scrollTo({top: y, behavior: 'smooth'});

      this.closeNavbarToggler()
      
      this.removeForceSelection(page)
    }
  }

  private addForceSelection(page:string){
    const link = document.getElementById(page) as HTMLAnchorElement
    link.classList.add("force-selected")
  }

  private removeForceSelection(page:string){
    for (let i = 0; i < this.pagesList.length -1; i++) {
      const key = this.pagesList[i]
      const link = document.getElementById(key) as HTMLAnchorElement
      if(key != page){
        link.classList.remove("selected")
        link.classList.remove("force-selected")
      }
    }
    const link = document.getElementById(page) as HTMLAnchorElement
    setTimeout(()=>{
      link.classList.remove("force-selected")
    }, 2000);
  }

  private calculateYOffset(page:string):number{
    const yOffset = -70; 
    if (page == 'clients'){
      page = 'shopkeepers'
    }
    const element = document.querySelector(`app-${page}`) as HTMLElement
    if(!element) return 0
    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
    return y
  }

  private closeNavbarToggler(){
    const navbarToggler = document.querySelector('.navbar-toggler') as HTMLButtonElement
    if(navbarToggler.getAttribute("aria-expanded")=='true'){
      navbarToggler.click()
    }
  }
}
