import { NgModule } from "@angular/core";
import { FormComponent } from "./views/form.component";
import { FormRoutingModule } from "./form-routing.module";
import { MaterialModule } from "../material/material.module";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
    declarations: [
        FormComponent
    ],
    imports: [
        FormRoutingModule,
        MaterialModule,
        CommonModule,
        ReactiveFormsModule
    ],
    exports: [
        FormComponent
    ]
})
export class FormModule { }