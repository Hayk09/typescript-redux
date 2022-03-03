
export enum todoActionType {
    ADD_TEXT = 'ADD_TEXT',
    EDIT_TEXT='EDIT_Text',
    DELETE_TEXT = 'DELETE_TEXT',
    SET_TEXT ='SET_TEXT',
    CHEKED_TEXT = 'CHEKED_TEXT',
    RESTORE_TEXT = 'RESTORE_TEXT',
    CHANGE_TEXT = 'CHANGE_TEXT'
}

export type Item = {
   title: string,
   activity: boolean,
   id: string
}

export interface TodoState {
   task:[] | any,
   history:[] | any
}

interface Task {
   type: todoActionType ;
   payload:{
       id:string,
       title: string
   };
   

}
interface History {
   type: todoActionType;
   payload:{
       id:string,
       title: string
   };

}


export type TodoTypes = Task | History