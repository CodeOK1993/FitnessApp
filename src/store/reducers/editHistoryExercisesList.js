import * as types from "../actionTypes";

export const editHistoryExercisesList = (
    state = {
        workoutHistoryExerciseList: {}
    },
    action
) => {
    switch (action.type) {
        case types.ADD_EXERCISES_TO_EXERCISE_LIST_OF_WORKOUT_HISTORY:
            if (!action.payload.weightRepsDataArr) {
                action.payload.weightRepsDataArr = [];
            }
            const currentDateExerciseListCopy = state.workoutHistoryExerciseList[action.payload.date] ? JSON.parse(JSON.stringify(state.workoutHistoryExerciseList[action.payload.date])) : [];
            currentDateExerciseListCopy.push(action.payload);
            // const WorkHistoryExerciseCopy = JSON.parse(JSON.stringify(state.workoutHistoryExerciseList));
            // return [...state, action.payload];
            return {
                ...state,
                workoutHistoryExerciseList: {
                    ...state.workoutHistoryExerciseList,
                    [action.payload.date]: currentDateExerciseListCopy
                }
            };

        case types.ADD_WEIGHT_REPS_TO_EXERCISE_IN_CALENDAR_HISTORY:
            const stateCopy = JSON.parse(JSON.stringify(state.workoutHistoryExerciseList[action.payload.date]));
            stateCopy.map(item => {
                if (parseInt(item.time, 10) === parseInt(action.payload.time, 10)) {
                    if (!item.weightRepsDataArr) {
                        item.weightRepsDataArr = [];
                    }
                    item.weightRepsDataArr.push({reps: action.payload.reps, weight: action.payload.weight});
                    item.reps = action.payload.reps;
                    item.weight = action.payload.weight;
                }
            });
            return {
                ...state,
                workoutHistoryExerciseList: {...state.workoutHistoryExerciseList, [action.payload.date]: stateCopy}
            };
        case types.DELETE_EXERCISES_FROM_EXERCISE_LIST_OF_WORKOUT_HISTORY:
            const stateCopyDelete = JSON.parse(JSON.stringify(state.workoutHistoryExerciseList[action.payload.date]));
            stateCopyDelete.map((item, index) => {
                if (parseInt(item.time, 10) === parseInt(action.payload.time, 10)) {
                    stateCopyDelete.splice(index, 1);
                }
            });
            // return {...state, workoutHistoryExerciseList: stateCopyDelete};
            return {
                ...state,
                workoutHistoryExerciseList: {
                    ...state.workoutHistoryExerciseList,
                    [action.payload.date]: stateCopyDelete
                }
            };
        case types.EDIT_WEIGHT_REPS_IN_WORKOUT_OF_CALENDAR_HISTORY_ACTION:
            const stateCopyForEditAll = JSON.parse(JSON.stringify(state.workoutHistoryExerciseList[action.payload.date]));
            stateCopyForEditAll.map((item, index) => {
                if (parseInt(item.time, 10) === parseInt(action.payload.time, 10)) {
                    item.sets = action.payload.sets;
                    delete item.weightRepsDataArr;
                    item.weightRepsDataArr = [];
                    let arrTmp = Object.keys(action.payload.weightText);
                    // console.warn("length", arrTmp.length);
                    for (let i = 0; i < arrTmp.length; i++) {
                        item.weightRepsDataArr.push({
                            reps: action.payload.repsText[i],
                            weight: action.payload.weightText[i]
                        });
                    }
                }
            });
            // return {...state, workoutHistoryExerciseList: stateCopyForEditAll};
            return {
                ...state,
                workoutHistoryExerciseList: {
                    ...state.workoutHistoryExerciseList,
                    [action.payload.date]: stateCopyForEditAll
                }
            };
        case types.ADD_EXERCISES_LIST_TO_WORKOUT_HISTORY:
            return {...state};
        default:
            return state;
    }
};
