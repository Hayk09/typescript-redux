import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { todoActionType, Item } from "../../store/types";
import store from '../../store'

type RootState = ReturnType<typeof store.getState>



const DeleteTodo = () => {
    const todos = useSelector((state: RootState) => state.todo.history)
    const dispatch = useDispatch()

    const onRemove = (id: string | undefined) => {
        dispatch({
          type: todoActionType.DELETE_TEXT,
          payload: {
            id: id,
            activity: false
          }
    
        })
      }
      const onRestore = (id: string | undefined) => {
        dispatch({
          type: todoActionType.RESTORE_TEXT,
          payload: {
            id: id,
            activity: false
          }
        })
      }


    return (
        <div>
            {

                todos?.map((item: Item) => (
                  
                        <div key={item.id}>
                        <p>{item.title}</p>
                        <button
                            className='btn_restore'
                            onClick={() => onRestore(item.id)}
                        >
                            Restore text
                        </button>
                        <button
                            className='btn_delete'
                            onClick={() => onRemove(item.id)}>
                            Are you sure you want to delete?
                        </button>
                    </div>
                
                  
                    
               
                ))
            }
        </div>
    )
}

export default DeleteTodo