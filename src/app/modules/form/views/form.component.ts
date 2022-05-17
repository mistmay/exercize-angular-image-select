import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Category } from 'src/app/models/category';
import { FormResultsHandlerService } from 'src/app/services/form-results-handler.service';

@Component({
    selector: 'app-form',
    template: `
    <form class="container bg-white p-5 border" [formGroup]="form" (ngSubmit)="submit()">
        <h2 class="fs-3 fw-bold text-center mb-3">What kind of Images Do you Want to see?</h2>
        <mat-form-field appearance="fill" class="w-100 mb-2">
            <mat-label>Category</mat-label>
            <mat-select formControlName="category">
                <mat-option *ngFor="let category of categories" [value]="category">
                    {{category | titlecase}}
                </mat-option>
            </mat-select>
            <mat-error class="text-danger" *ngIf="form.get('category')?.hasError('required')">Required</mat-error>
        </mat-form-field>
        <mat-form-field appearance="fill" class="w-100 mb-3">
            <mat-label>Number of Images</mat-label>
            <input matInput placeholder="Number of Images" type="number" formControlName="number" min="1">
            <mat-error class="text-danger" *ngIf="form.get('number')?.hasError('required')">Required</mat-error>
            <mat-error class="text-danger" *ngIf="form.get('number')?.hasError('min')">Number must be Bigger then Zero</mat-error>
        </mat-form-field>
        <button mat-raised-button color="primary" class="w-100" [disabled]="form.invalid" type="submit">Go to Images</button>
    </form>
    `
})
export class FormComponent implements OnInit {
    categories: Category[] = ['cats', 'birds', 'shibes'];
    form!: FormGroup;

    constructor(private fb: FormBuilder, private formResultsHandler: FormResultsHandlerService, private router: Router) { }

    ngOnInit(): void {
        this.form = this.fb.group({
            category: ['', Validators.required],
            number: ['', Validators.compose([Validators.required, Validators.min(1)])]
        });
    }

    submit(): void {
        this.formResultsHandler.newFormResults([this.form.value.category, this.form.value.number]);
        this.form.reset();
        this.router.navigate(['gallery']);
    }
}