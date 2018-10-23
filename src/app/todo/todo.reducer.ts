import * as fromTodo from './todo.actions';
import { Todo } from './model/todo.model';
import { Action } from '@ngrx/store';

const todo1=new Todo("Vender a thanos")
const todo2=new Todo("Salvar al mundo")
const todo3=new Todo("Pedir prestamo el traje de ironman")

const estadoInicial: Todo[] = [todo1,todo2,todo3];
export function todoReducer(state = estadoInicial, Action: fromTodo.Acciones ): Todo[] {
    switch (Action.type) {
        case fromTodo.AGREGAR_TODO:
        const todo = new Todo(Action.texto);
        return [...state, todo];
    
        case fromTodo.TOGGLE_TODO:
            return state.map( todoEdit  =>{
            if(todoEdit.id==Action.id){
                return {        
                    ...todoEdit,
                    completado:!todoEdit.completado
                }
            }else{
                return todoEdit
            }

            })

            case fromTodo.EDITAR_TODO:
            return state.map( todoEdit=>{
                if(todoEdit.id==Action.id){
                    return {
                        ...todoEdit,
                        texto:Action.texto
                    }
                }else{
                    return todoEdit
                }
            })


            case fromTodo.BORRAR_TODO:
            return state.filter( borrarTodo=>{
                if(borrarTodo.id!=Action.id) return borrarTodo
               
            })

        case fromTodo.TOGGLE_ALL_TODO:
        return state.map(todoEdit=>{
            return {
                ...todoEdit,
                completado:Action.completado
            }
        })


        case fromTodo.LimpiarCompletados:
        return state.filter(todo=> !todo.completado )


        default:
          return state;
    }
}
