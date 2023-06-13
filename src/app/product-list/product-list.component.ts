import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
// import { Action } from 'rxjs/internal/scheduler/Action';
// import { Action } from 'rxjs/internal/scheduler/Action';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
// productList:any=[
//   // {
//   //   "id": 1,
//   //   "title": "iPhone 9",
//   //   "description": "An apple mobile which is nothing like apple",
//   //   "price": 549,
//   //   "discountPercentage": 12.96,
//   //   "rating": 4.69,
//   //   "stock": 94,
//   //   "brand": "Apple",
//   //   "category": "smartphones",
//   //   "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
//   // }
  
//   {
//     "id": 1,
//     "title": "iPhone 9",
//     "description": "An apple mobile which is nothing like apple",
//     "price": 549,
//     "discountPercentage": 12.96,
//     "rating": 4.69,
//     "stock": 94,
//     "brand": "Apple",
//     "category": "smartphones",
//     "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
   
//   },
//   {
//     "id": 2,
//     "title": "iPhone X",
//     "description": "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
//     "price": 899,
//     "discountPercentage": 17.94,
//     "rating": 4.44,
//     "stock": 34,
//     "brand": "Apple",
//     "category": "smartphones",
//     "thumbnail": "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
    
//   },
//   {
//     "id": 3,
//     "title": "Samsung Universe 9",
//     "description": "Samsung's new variant which goes beyond Galaxy to the Universe",
//     "price": 1249,
//     "discountPercentage": 15.46,
//     "rating": 4.09,
//     "stock": 36,
//     "brand": "Samsung",
//     "category": "smartphones",
//     "thumbnail": "https://i.dummyjson.com/data/products/3/thumbnail.jpg",
//   },
//   {
//     "id": 4,
//     "title": "OPPOF19",
//     "description": "OPPO F19 is officially announced on April 2021.",
//     "price": 280,
//     "discountPercentage": 17.91,
//     "rating": 4.3,
//     "stock": 123,
//     "brand": "OPPO",
//     "category": "smartphones",
//     "thumbnail": "https://i.dummyjson.com/data/products/4/thumbnail.jpg",
    
//   },
//   {
//     "id": 5,
//     "title": "Huawei P30",
//     "description": "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
//     "price": 499,
//     "discountPercentage": 10.58,
//     "rating": 4.09,
//     "stock": 32,
//     "brand": "Huawei",
//     "category": "smartphones",
//     "thumbnail": "https://i.dummyjson.com/data/products/5/thumbnail.jpg",
    
//   },
//   {
//     "id": 6,
//     "title": "MacBook Pro",
//     "description": "MacBook Pro 2021 with mini-LED display may launch between September, November",
//     "price": 1749,
//     "discountPercentage": 11.02,
//     "rating": 4.57,
//     "stock": 83,
//     "brand": "Apple",
//     "category": "laptops",
//     "thumbnail": "https://i.dummyjson.com/data/products/6/thumbnail.png",
//   },
//   {
//     "id": 7,
//     "title": "Samsung Galaxy Book",
//     "description": "Samsung Galaxy Book S (2020) Laptop With Intel Lakefield Chip, 8GB of RAM Launched",
//     "price": 1499,
//     "discountPercentage": 4.15,
//     "rating": 4.25,
//     "stock": 50,
//     "brand": "Samsung",
//     "category": "laptops",
//     "thumbnail": "https://i.dummyjson.com/data/products/7/thumbnail.jpg",
   
//   },
//   {
//     "id": 8,
//     "title": "Microsoft Surface Laptop 4",
//     "description": "Style and speed. Stand out on HD video calls backed by Studio Mics. Capture ideas on the vibrant touchscreen.",
//     "price": 1499,
//     "discountPercentage": 10.23,
//     "rating": 4.43,
//     "stock": 68,
//     "brand": "Microsoft Surface",
//     "category": "laptops",
//     "thumbnail": "https://i.dummyjson.com/data/products/8/thumbnail.jpg",
    
//   },
//   {
//     "id": 9,
//     "title": "Infinix INBOOK",
//     "description": "Infinix Inbook X1 Ci3 10th 8GB 256GB 14 Win10 Grey – 1 Year Warranty",
//     "price": 1099,
//     "discountPercentage": 11.83,
// //     "rating": 4.54,
//     "stock": 96,
//     "brand": "Infinix",
//     "category": "laptops",
//     "thumbnail": "https://i.dummyjson.com/data/products/9/thumbnail.jpg",
    
//   },
//   {
//     "id": 10,
//     "title": "HP Pavilion 15-DK1056WM",
//     "description": "HP Pavilion 15-DK1056WM Gaming Laptop 10th Gen Core i5, 8GB, 256GB SSD, GTX 1650 4GB, Windows 10",
//     "price": 1099,
//     "discountPercentage": 6.18,
//     "rating": 4.43,
//     "stock": 89,
//     "brand": "HP Pavilion",
//     "category": "laptops",
//     "thumbnail": "https://i.dummyjson.com/data/products/10/thumbnail.jpeg",
    
//   },
// ]
productList:any
item: any;
// navigateToProductsDetails: any;
productService:any
previousselproductId:string |null=null

constructor(private router:Router,private route:ActivatedRoute){
  this.productService=new this.productService()
 }
 
ngOnInit(): void {
  this.previousselproductId=this.route.snapshot.queryParamMap.get("selectedProductId")
console.log("Product Id",this.previousselproductId)
console.log("Activated Route Output",this.route)
  this.productList=this.productService.getProductList()
}


// navigateToProductDetails(id:number){
//   this.router.navigate(['/product-details',id])
// }
}
