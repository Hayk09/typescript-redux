import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import store from '../../store';
import { Item, todoActionType } from "../../store/types";

type RootState = ReturnType<typeof store.getState>


const TodoItem = () => {
    const todos = useSelector((state: RootState) => state.todo.task)
    const dispatch = useDispatch()
    const [disabled, setDisabled] = useState(true)
    const [edit, setEdit] = useState('')


    const onRemove = (id: string | undefined) => {
        dispatch({
            type: todoActionType.DELETE_TEXT,
            payload: {
                id: id
            }
        })
    }

    const onChange = (id: string | undefined) => {
        dispatch({
            type: todoActionType.CHEKED_TEXT,
            payload: {
                id: id
            }

        })
    }

    const onEdit = () => {

        setDisabled(false)

    }

    return (
        <div>
            {
                todos?.map((item: Item) => (
                    item.activity === true ? (
                        <div key={item.id}>
                            {/* <p>{item.title}</p> */}
                            <input
                                defaultValue={item.title}
                                disabled={disabled}
                                onChange={(e) => setEdit(e.target.value)} />
                            <button
                                className='btn_restore'
                                onClick={onEdit}
                            >
                                Edit Text
                            </button>
                            <button
                                className='btn_delete'
                                onClick={() => onRemove(item.id)}>
                                delete?
                            </button>
                            <input type='checkbox' checked={false} onChange={() => onChange(item.id)} />
                        </div>

                    ) : (
                        <div key={item.id}>
                            <del>{item.title}</del>
                            <input type='checkbox' checked={true} onChange={() => onChange(item.id)} />
                        </div>
                    )



                ))
            }
        </div>
    )
}
export default TodoItem