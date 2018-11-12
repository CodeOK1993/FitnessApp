import {createAction} from 'redux-actions';
import * as types from './actionTypes';

export const setExerciseModalVisibility=(visible)=>(
    createAction(types.SET_EXECERCISE_VISIBILITY)(visible)
);

export const addExerciseAction=(exercise)=>(
    createAction(types.ADD_EXERCISE)(exercise)
);

export const clearCurrentWorkoutAction=()=>(
    createAction(types.CLEAR_CURRENT_WORKOUT)()
)
export const updateEmptyAction=(bool)=>(
    createAction(types.UPDATE_EMPTY)(bool)
)
export const setCurrentDateAction=(date)=>(
    createAction(types.SET_CURRENT_DATE)(date)
)
export const addMarkedDateAction=(date)=>(
    createAction(types.ADD_MARKED_DATE)(date)
)
export const updateWeightAction=(data)=>(
    createAction(types.UPDATE_WEIGHT_DATA)(data)
)
export const updateBfrAction=(data)=>(
    createAction(types.UPDATE_BFR_DATA)(data)
)

