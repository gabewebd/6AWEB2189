import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Products {
  constructor() { }

  getProducts() {
    return [
      {
        productId: 'P-101',
        productName: 'Logitech G502',
        description: 'High Performance Wireless Gaming Mouse',
        price: 899.00,
        image: 'https://shop.tti.com.ph/pub/media/catalog/product/cache/07dc43095bd992476134f3022ceb9abf/h/i/high_resolution_png-g502_lightspeed-gallery_1.png'
      },
      {
        productId: 'P-102',
        productName: 'JBL Go 4',
        description: 'Ultra-portable Waterproof Bluetooth Speaker',
        price: 1099.00,
        image: 'https://jblstore.com.ph/cdn/shop/files/JBLGo4_Main_Black_600x.png?v=1757250462'
      },
      {
        productId: 'P-103',
        productName: 'Mech Keyboard',
        description: 'Hot-swappable RGB Backlit Mechanical',
        price: 2395.00,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61uw+twBzfL._UL500_.jpg'
      },
      {
        productId: 'P-104',
        productName: 'Meta Quest 2',
        description: 'Advanced All-in-One Virtual Reality Headset',
        price: 22450.00,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc0vqzJIA-q0JGIoZDKJbSah6YZp-f86Z5wA&s'
      }
    ];
  }
}