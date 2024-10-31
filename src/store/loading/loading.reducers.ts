import { createReducer, on } from '@ngrx/store';
import { hide, show } from './loading.action';

// 1. Defina a interface para o estado (State)
export interface LoadingState {
  isLoading: boolean;
}

// 2. Defina o estado inicial
export const initialState: LoadingState = {
  isLoading: false,
};

// 3. Atualize o `createReducer` para utilizar o estado tipado
const reducer = createReducer(
  initialState,
  on(show, (state) => {
    return { ...state, isLoading: true };
  }),
  on(hide, (state) => {
    return { ...state, isLoading: false };
  })
);

// 4. Tipar explicitamente o state e action no `loadingReducer`
export function loadingReducer(state: LoadingState | undefined, action: any): LoadingState {
  return reducer(state, action);
}

