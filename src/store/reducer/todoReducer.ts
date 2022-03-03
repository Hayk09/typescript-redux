import { v4 as uuidv4 } from "uuid";
import  {todoActionType,TodoState,TodoTypes,Item } from '../types'

const initialState: TodoState = {
    task: [],
     history: []
}
export const todoReducer = ( state = initialState, action:TodoTypes ) => {
    switch(action.type){
        case todoActionType.ADD_TEXT:{
            
            return {...state, task:[...state.task, action.payload]}
        }
        case todoActionType.DELETE_TEXT:{
            state.history = Object.assign([],state?.task?.filter((t:Item) => t.id === action.payload.id))
            state.task = Object.assign([],state?.task?.filter((t:Item) => t.id !== action.payload.id));
            // const Data = [...state.history]
            // const Data = state.task.concat(state.history) 
            return {...state, task:[...state.task], history:[...state.history]} 
        }
        case todoActionType.RESTORE_TEXT:{
            state.task = Object.assign([],state?.history?.filter((t:Item) => t.id === action.payload.id))
            
            return {...state, task:[...state.task]} 
        }
        case todoActionType.CHEKED_TEXT:{
            state.task = Object.assign([], state?.task.map((e:Item)=> ({
                ...e,
                activity: action.payload.id === e.id ? !e.activity : true
            })) )
            
          return {...state, task:[...state.task]} 
        }
        case todoActionType.EDIT_TEXT: {
            state.task = Object.assign([], state?.task.map((e:Item)=> ({
                ...e,
                activity:action.payload.id === e.id ? !e.activity : true
            })) )
            return {...state, task:[...state.task, action.payload]}
        }
       
        
       default: return state
    }
}

