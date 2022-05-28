import TaskPreview from "../TaskPreview/TaskPreview";
import "./TasksMaster.css";

function TasksMaster() {
    return (
        <div>
            {
                ({ tasks }) => (
                    <div>
                        <h2>Tasks</h2>
                        <div>
                            {tasks.map(task => <TaskPreview key={task.id} task={task} />)}
                        </div>
                    </div>
                )
            }
        </div>
    );
}

export default TasksMaster;