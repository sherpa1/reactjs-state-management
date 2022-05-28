import {React, createContext} from 'react';

const TasksContext = createContext(
    {tasks:[],setTasks : {}}
);

export default TasksContext;