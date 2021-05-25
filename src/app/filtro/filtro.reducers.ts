import { createReducer, on } from '@ngrx/store';
import { setFiltro, filtrosValidos } from './filtro.actions';

export const initialState: string = 'todos';

const _filtroReducer = createReducer(initialState,
  on( setFiltro , (state, {filtro}) => filtro ),
);

export function filtroReducer(state, action) {
  return _filtroReducer(state, action);
}