import TasksContext from "../contexts/TasksContext";
import TaskPreview from "./TaskPreview/TaskPreview";

function TasksMaster() {


    return (
        <div>

            <TasksContext.Consumer>
                {
                    ({ tasks }) => (
                        <div>
                            <h2>Tasks</h2>
                            <div>
                                {tasks.map(task => <TaskPreview key={task.id} task={task}/>)}
                            </div>
                        </div>
                    )
                }
            </TasksContext.Consumer>
        </div>
    );
}

export default TasksMaster;