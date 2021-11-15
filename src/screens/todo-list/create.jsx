import { Button } from "@chakra-ui/button"
import { Input } from "@chakra-ui/input"
import { Textarea } from "@chakra-ui/textarea"
import { useTodoCreate } from "./hooks"

const TodoCreate = ({ onClick, todo, activeTodo }) => {
    const {
        createHandler,
        name,
        description,
        nameIsRequired,
        descriptionIsRequired,
        validate
    } = useTodoCreate({ onClick, todo, activeTodo })

    return (
        <div className='an-fade w-full'>
            <Input
                autoComplete='off'
                style={{ borderColor: nameIsRequired && 'red' }}
                defaultValue={name}
                name='name'
                onChange={createHandler}
                placeholder='Input Todo'
                className={`border-2 rounded-md mb-3`} />
            <Textarea
                autoComplete='off'
                style={{ borderColor: descriptionIsRequired && 'red' }}
                defaultValue={description}
                onChange={createHandler}
                name='description'
                placeholder='Input description' />
            <Button
                onClick={() => validate()}
                className='mt-3'>
                Done
            </Button>
        </div>
    )
}

export default TodoCreate