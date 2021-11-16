import { useColorMode } from "@chakra-ui/color-mode"
import { faArrowLeft, faLightbulb, faPowerOff } from "@fortawesome/fontawesome-free-solid"
import { useCallback, useState } from "react"

export const useTodoList = () => {
    const [todo, setTodo] = useState([])
    const [tab, setTab] = useState('list')
    const [activeTodo, setActiveTodo] = useState()
    const showBackIcon = tab === 'edit' || tab === 'create'
    const showCreateIcon = tab === 'list'

    const setTodoHandler = useCallback(({ data, type, index }) => {
        switch (type) {
            case 'add':
                setTodo(current => [...current, data])
                break;
            case 'edit':
                setTodo(current => current.map((item, idx) => {
                    if (idx === index) item = data
                    return item
                }))
                break;
            default:
                break
        }
        setTab('list')
    }, [])

    const navigateToEditHandler = useCallback((index) => {
        setActiveTodo(index)
        setTab('edit')
    }, [])

    const navigateToCreateHandler = useCallback((index) => {
        setActiveTodo()
        setTab('create')
    }, [])


    const { colorMode, toggleColorMode } = useColorMode()


    const lightIcon = (colorMode === 'dark' ? faLightbulb : faPowerOff)
    const icon = showBackIcon ? faArrowLeft : lightIcon

    return {
        todo,
        setTodo,
        tab,
        setTab,
        activeTodo,
        setActiveTodo,
        showBackIcon,
        showCreateIcon,
        setTodoHandler,
        navigateToCreateHandler,
        navigateToEditHandler,
        toggleColorMode,
        icon
    }
}

export const useTodoCreate = ({ onClick, todo, activeTodo }) => {
    const item = todo?.filter((data, idx) => idx === activeTodo)[0]
    const [create, setCreate] = useState({
        name: item?.name,
        description: item?.description,
        id: item?.id || `item-${todo?.length}`
    })


    const createHandler = useCallback((e) => {
        const { name, value } = e.target
        setCreate(current => ({ ...current, [name]: value }))
    }, [])

    const { name, description, nameIsRequired, descriptionIsRequired } = create

    const validate = () => {
        let required = false
        if (!name || !description) {
            if (!name) setCreate(current => ({ ...current, nameIsRequired: true }))
            else setCreate(current => ({ ...current, nameIsRequired: false }))
            if (!description) setCreate(current => ({ ...current, descriptionIsRequired: true }))
            else setCreate(current => ({ ...current, nameIsRequired: false }))
            required = true
        }
        else required = false
        !required && onClick({ data: create, type: item ? 'edit' : 'add', index: activeTodo })
    }

    return {
        create,
        setCreate,
        createHandler,
        name,
        description,
        nameIsRequired,
        descriptionIsRequired,
        validate
    }
}

export const useDraggable = ({ todo, setTodo }) => {
    const { colorMode } = useColorMode()
    const isDark = colorMode === 'dark'

    const getListStyle = isDraggingOver => ({
        transition: 'all ease 0.3s',
        background: isDraggingOver ? "#3B81F6" : "lightgrey",
        padding: grid,
        width: '100%',
        borderRadius: '7px'
    });

    const getItemStyle = (isDragging, draggableStyle) => ({
        transition: 'all ease 0.3s',
        userSelect: "none",
        padding: grid * 2,
        margin: `0 0 ${grid}px 0`,
        color: isDragging && isDark && '#3B81F6',
        background: isDragging ? "lightgrey" : (isDark ? '#3B81F6' : "white"),
        borderRadius: '7px',
        ...draggableStyle
    });

    const reorder = (list, startIndex, endIndex) => {
        const result = Array.from(list);
        const [removed] = result.splice(startIndex, 1);
        result.splice(endIndex, 0, removed);

        return result;
    };

    const grid = 8;

    const onDragEnd = (result) => {
        if (!result.destination) {
            return;
        }

        const items = reorder(
            todo,
            result.source.index,
            result.destination.index
        );
        setTodo(items)
    }

    return {
        getItemStyle,
        getListStyle,
        onDragEnd,

    }
}