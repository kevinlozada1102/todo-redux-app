import { state } from '@angular/animations';
import { createReducer, on } from '@ngrx/store';
import { Todo } from './models/todo.model';
import { crear, toggle, editar, borrar, togleAll, limpiarCompletados } from './todo.actions';


export const estadoInicial: Todo[] = [
    new Todo('Hola Kevin'),
    new Todo('Hola Rosa'),
    new Todo('Hola Juan'),
    new Todo('Hola Johnny'),
];

const _todoReducer = createReducer(estadoInicial,
  on( crear, (state, {texto}) => [...state, new Todo(texto)]),
  on( borrar, (state, { id }) => state.filter(todo => todo.id !== id)),
  on( togleAll, (state, {completado}) => state.map( todo => {
    return {
      ... todo,
      completado: completado
    }
  })),
  on( toggle, (state, {id}) => {
    return state.map( todo => {
      if( todo.id === id) {
        return {
          ...todo,
          completado: !todo.completado
        }
      } else {
        return todo;
      }
    })
  }),
  on( editar, (state, {id, texto}) => {
    return state.map( todo => {
      if( todo.id === id) {
        return {
          ...todo,
          texto: texto
        }
      } else {
        return todo;
      }
    })
  }),
  on( limpiarCompletados, (state) => {
    return state.filter( todo => !todo.completado);
  }),
);

export function todoReducer(state, action) {
  return _todoReducer(state, action);
}