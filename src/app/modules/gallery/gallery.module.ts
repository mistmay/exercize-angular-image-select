import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { GalleryRoutingModule } from "./gallery-routing.module";
import { GalleryComponent } from "./views/gallery.component";

@NgModule({
    declarations: [
        GalleryComponent
    ],
    imports: [
        GalleryRoutingModule,
        CommonModule
    ],
    exports: [
        GalleryComponent
    ]
})
export class GalleryModule { }