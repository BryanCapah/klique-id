import { Input } from "@chakra-ui/input"
import { useEffect, useState } from "react"
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { useSelector } from "react-redux";
import { sagaActions } from "../../stores/actions/saga";
import { getTodo } from "../../stores/reducers/todo";
import store from "../../stores/store";
import { useDraggable } from "./hooks";

const TodoList = ({ todo, onClick, setTodo }) => {
    const todoIsEmpty = todo?.length === 0
    const [search, setSearch] = useState('')

    const {
        getItemStyle,
        getListStyle,
        onDragEnd,

    } = useDraggable({ todo, setTodo })

    const dataFromApi = useSelector(getTodo)

    useEffect(() => {
        store.dispatch(({ type: sagaActions.FETCH_DATA_SAGA }))

    }, [])

    if (todoIsEmpty) return (
        <div className='an-fade w-full p-3'>
            <span className='text-blue-500 font-bold'>
                Todo is Empty. Please create new Todo ( + )
                or <span className='cursor-pointer underline' onClick={() => setTodo(dataFromApi)}>get from Api</span>
            </span>
        </div>
    )

    return (
        < div className='an-fade w-full' >
            <Input
                autoComplete='off'
                name='name'
                onChange={(e) => setSearch(e.target.value)}
                placeholder='Search Todo'
                className={`border-2 rounded-md mb-3`} />
            <DragDropContext onDragEnd={onDragEnd}>
                <Droppable droppableId='droppable'>
                    {(provided, snapshot) => (
                        <div
                            {...provided.droppableProps}
                            ref={provided.innerRef}
                            style={getListStyle(snapshot.isDraggingOver)}
                        >
                            {
                                todo?.filter(item => item?.name?.toLowerCase()?.includes(search?.toLowerCase()))?.map((todoItem, idx) => {
                                    const { name, id } = todoItem
                                    return (
                                        <Draggable
                                            key={id} draggableId={id} index={idx}
                                            onClick={() => onClick(idx)}
                                            className='w-full border-b-2 mb-3 hover:bg-blue-300 transition-all rounded-md cursor-pointer p-3'>
                                            {(provided, snapshot) => (
                                                <div
                                                    onClick={() => onClick(idx)}
                                                    ref={provided.innerRef}
                                                    {...provided.draggableProps}
                                                    {...provided.dragHandleProps}
                                                    style={getItemStyle(
                                                        snapshot.isDragging,
                                                        provided.draggableProps.style
                                                    )}
                                                >
                                                    {name}
                                                </div>
                                            )}
                                        </Draggable>
                                    )
                                })
                            }
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
            </DragDropContext>

        </div >
    )
}

export default TodoList