import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from "./views/form.component";

const routes: Routes = [
    {
        path: '',
        component: FormComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class FormRoutingModule { }