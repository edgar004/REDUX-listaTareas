import { Component, OnInit } from '@angular/core';
import * as fromFiltro from '../../filter/filter.actions'
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducers';
import { LimpiarCompletadosTodoAction } from '../todo.actions';
@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styles: []
})
export class TodoFooterComponent implements OnInit {
filtrosValidos:fromFiltro.filtrosValidos[]=['todos','completados','pendientes']
filtroActual:fromFiltro.filtrosValidos;  
tareasPendientes:number=0
constructor(private store:Store<AppState>) { }

  ngOnInit() {

    this.store.subscribe(state=>{
      this.filtroActual=state.filtro
         this.tareasPendientes=state.todos.filter(todo=>!todo.completado).length
        })
  }


  cambiarFiltro(filtro:fromFiltro.filtrosValidos){
  const accion=new fromFiltro.SetFiltroAction(filtro)
  this.store.dispatch(accion)

  }

  limpiarCompletados(){
  const accion=new LimpiarCompletadosTodoAction()
  this.store.dispatch(accion)

  }
}
