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

    if (action.type == increment.type) {
        newState.cups = state.cups + 1;
        return newState;
    } else if (action.type == decrement.type) {
        newState.cups = state.cups - 1;
        return newState;
    } else if (action.type == reset.type) {
        newState.cups = 10;
        return newState;
    } else {
        return newState;
    }
}



























// Sample Action
// if (action.type === increment.type) {
//     newState.cups = state.cups + 1;
// }
