import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ProductsService } from '../../services/products/products.service';

@Component({
  selector: 'app-list-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-products.component.html',
  styleUrl: './list-products.component.css'
})
export class ListProductsComponent {
  constructor(private productsService: ProductsService, private router: Router) { }

  products: any[] = [];

  ngOnInit() {
    this.productsService.getAllProducts().subscribe((data: any) => {
      this.products = data.products;
      console.log(this.products);
    });
  }

  deleteProduct(productId: number) {
    if(confirm('vous etes sur de vouloir supprimer ce produit ?')) {
      this.productsService.deleteProductById(productId).subscribe(() => {
        this.products = this.products.filter(product => product.id !== productId);
        console.log(`Product with id ${productId} deleted.`);
      });
    }
  }

  redirectToProductDetails(productId: number) {
    this.router.navigate(['/product'], { queryParams: { id: productId } });
  }

  redirectToAddProduct() {
    this.router.navigate(['/products/add']);
  }

  redirectToEditProduct(productId: number) {
    this.router.navigate(['/products/edit'], { queryParams: { id: productId } });
  }

}
