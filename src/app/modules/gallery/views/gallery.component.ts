import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { FormResultsHandlerService } from 'src/app/services/form-results-handler.service';
import { Category } from 'src/app/models/category';
import { Router } from '@angular/router';
import { ImagesApiService } from 'src/app/api/images-api.service';

@Component({
    selector: 'app-gallery',
    template: `
    <section class="container bg-white p-5 border">
        <h2 class="fw-bold fs-2 text-center mb-3" *ngIf="category">Results for {{category | titlecase}}</h2>
        <div class="w-100 d-flex align-items-center flex-wrap" *ngIf="imagesArray.length > 0; else loading">
            <div class="img-card rounded bg-light my-3 border" *ngFor="let image of imagesArray" [ngStyle]="{'background-image': 'url('+image+')'}"></div>
        </div>
    </section>
    <ng-template #loading>
        <p>Loading...</p>
    </ng-template>
    `,
    styles: [`
    .img-card {
        background-position: center;
        background-size: contain;
        background-repeat: no-repeat;
        height: 300px;
        width: 100%;
    }
    @media (min-width: 768px) {
        .img-card {
            width: 50%;
        }
     }
    `]
})
export class GalleryComponent implements OnInit, OnDestroy {
    category!: Category;
    imagesArray: string[] = [];
    subscriptions: Subscription[] = [];

    constructor(private formResultsHandler: FormResultsHandlerService, private router: Router, private api: ImagesApiService) { }

    ngOnInit(): void {
        this.subscriptions.push(
            this.formResultsHandler.getFormResults()
                .subscribe((res: [Category, Number] | undefined) => {
                    if (res === undefined) {
                        this.router.navigate(['form']);
                    } else {
                        this.category = res[0];
                        this.api.resetObservable();
                        this.subscriptions.push(
                            this.api.returnImagesObservable(res[0], res[1])
                                .subscribe((images: string[]) => {
                                    this.imagesArray = images;
                                })
                        );
                    }
                })
        );
    }

    ngOnDestroy(): void {
        this.subscriptions.forEach((subscription: Subscription) => {
            subscription.unsubscribe();
        });
    }
}