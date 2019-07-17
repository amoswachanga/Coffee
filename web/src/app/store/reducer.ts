import { Action, createAction } from '@ngrx/store';

// State
export interface State {
    cups: number;
}

export const initialState: State = {
    cups: 10
};

// Actions
export const increment = createAction('[Cups] Increment');
export const decrement = createAction('[Cups] Decrement');
export const reset = createAction('[Cups] Reset');

// Reducer
export function appReducer(state = initialState, action: Action): State {
    const newState = state;


    return newState;
}
