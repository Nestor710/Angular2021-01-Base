import { NgModule } from "@angular/core";
import { ContadorComponent } from './contadorP/contador.component';


@NgModule({
    declarations: [
        ContadorComponent
    ],
    exports: [
        ContadorComponent
    ]
})


export class ContadorModule { }