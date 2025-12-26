import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsService } from '../../services/products/products.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detail-product.component.html',
  styleUrl: './detail-product.component.css'
})
export class DetailProductComponent {
  constructor(private productsService: ProductsService, private route: ActivatedRoute) { }

  product: any = null;
  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      const productId = Number(params['id']);
      this.productsService.getProductById(productId).subscribe((data: any) => {
        this.product = data;
        console.log(this.product);
      });
    });
  }

  deleteProduct() {
    if (this.product && this.product.id) {
      this.productsService.deleteProductById(this.product.id).subscribe(() => {
        alert(`Le produit avec l'id ${this.product.id} a été supprimé avec succès !`);
        this.product = null;
      });
    }
  }

}
