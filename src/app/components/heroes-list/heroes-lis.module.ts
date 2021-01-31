import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HeroesListComponent } from './heroes-list.component';
import { ListadoComponent } from './listado/listado.component';


@NgModule({
    declarations: [
        HeroesListComponent,
        ListadoComponent
    ],
    exports: [
        ListadoComponent
    ],
    imports: [
        CommonModule
    ]
})

export class HeroesListModule { }