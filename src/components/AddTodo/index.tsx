import React, { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { v4 as uuidv4 } from 'uuid'
import { todoActionType } from "../../store/types";
import store from "../../store";
import "./index.scss"


type RootState = ReturnType<typeof store.getState>

const AddTodo: FC = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const todos = useSelector((state: RootState) => state.todo.task)
    const dispatch = useDispatch()

    const submit = async (data: any) => {
        data.activity = true
        data.id = uuidv4()
        // data.time = start
        try {
            dispatch({ type: todoActionType.ADD_TEXT, payload: { ...data } })
        } catch (e) {
            console.log("error signing in", e);
        }
    };


    return (
        <div className="header">
            <form className='form' noValidate onSubmit={handleSubmit(submit)}>
                <input
                    type='text'
                    placeholder='title'
                    {...register("title", { required: true })}
                />
                <button
                    className='button'
                    type="submit" >
                      Add Task
                </button>
            </form>
        </div>
    )
}
export default AddTodo
