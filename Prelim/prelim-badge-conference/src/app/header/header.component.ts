import { Component, HostListener, ViewChild, ElementRef, AfterViewInit, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Collapse } from 'bootstrap';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements AfterViewInit {
  @ViewChild('navbarNav') navbarNav!: ElementRef;
  private collapseInstance!: Collapse;
  
  // Signal to handle the X animation state
  isMenuOpen = signal(false);

  ngAfterViewInit() {
    // Initialize Bootstrap Collapse without automatic toggling
    this.collapseInstance = new Collapse(this.navbarNav.nativeElement, {
      toggle: false
    });
  }

  toggleMenu(event: Event) {
    event.stopPropagation(); // Prevents document click from immediately closing it
    this.isMenuOpen.update(val => !val);
    this.isMenuOpen() ? this.collapseInstance.show() : this.collapseInstance.hide();
  }

  closeMenu() {
    if (this.isMenuOpen()) {
      this.isMenuOpen.set(false);
      this.collapseInstance.hide();
    }
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const clickedInside = this.navbarNav.nativeElement.parentElement?.contains(event.target);
    
    // If the menu is open and the user clicks anywhere outside the nav, close it
    if (this.isMenuOpen() && !clickedInside) {
      this.closeMenu();
    }
  }
}