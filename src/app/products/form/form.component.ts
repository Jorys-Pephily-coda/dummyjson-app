import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';
import { ProductsService } from '../../services/products/products.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product.model';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  form: FormGroup;
  isEditMode = false;
  productId?: number;

  constructor(
    private productsService: ProductsService,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      title: ['', Validators.required],
      description: [''],
      price: [0, [Validators.required, Validators.min(0)]],
      brand: [''],
      category: [''],
      images: ['']
    });
  }

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      const id = Number(params['id']);
      if (id) {
        this.isEditMode = true;
        this.productId = id;
        this.productsService.getProductById(id).subscribe((data: Product) => {
          this.form.patchValue({
            title: data.title,
            description: data.description,
            price: data.price,
            brand: data.brand,
            category: data.category,
            images: Array.isArray((data as any).images) ? (data as any).images.join(', ') : ((data as any).images || '')
          });
        });
      }
    });
  }

  onSubmit() {
    if (this.form.invalid) return;
    const fv = this.form.value as any;
    const images = fv.images ? String(fv.images).split(',').map((s: string) => s.trim()).filter(Boolean) : [];

    const payload: any = {
      title: fv.title,
      description: fv.description || '',
      price: Number(fv.price) || 0,
      brand: fv.brand || '',
      category: fv.category || '',
      images
    };

    if (this.isEditMode && this.productId) {
      this.productsService.updateProduct(this.productId, payload).subscribe(() => {
        alert(`Le produit avec l'id ${this.productId} a été mis à jour avec succès !`);
        this.router.navigate(['/products']);
      });
    } else {
      this.productsService.addProduct(payload).subscribe(() => {
        alert('Le produit a été ajouté avec succès !');
        this.router.navigate(['/products']);
      });
    }
  }

}
