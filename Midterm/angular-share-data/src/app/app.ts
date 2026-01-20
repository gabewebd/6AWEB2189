import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DecimalPipe } from '@angular/common';
import { Employee } from './employee';
import { Products } from './products';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, DecimalPipe],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  
  public employees: {
    id: number,
    firstname: string,
    lastname: string,
    email: string,
    image?: string
  }[] = [];

  public products: {
    productId: string,
    productName: string,
    description: string,
    price: number,
    image: string
  }[] = [];

  constructor(
    private _employeeService: Employee, 
    private _productsService: Products
  ) {}

  ngOnInit() {
    this.employees = this._employeeService.getEmployees();
    this.products = this._productsService.getProducts();

    const unsplashImages: any = {
      101: 'https://plus.unsplash.com/premium_photo-1682144187125-b55e638cf286?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cG9ydHJhaXQlMjBtYW58ZW58MHx8MHx8fDA%3D', // Joseph
      102: 'https://images.unsplash.com/photo-1564564244660-5d73c057f2d2?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z3V5fGVufDB8fDB8fHww', // James
      103: 'https://upload.wikimedia.org/wikipedia/commons/2/2e/John_Cena_by_Gage_Skidmore.jpg', // John Cena
      104: 'https://images.unsplash.com/photo-1508341591423-4347099e1f19?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG1hbnxlbnwwfHwwfHx8MA%3D%3D' // Robert
    };

    this.employees.forEach(emp => {
      emp.image = unsplashImages[emp.id];
    });
  }
}