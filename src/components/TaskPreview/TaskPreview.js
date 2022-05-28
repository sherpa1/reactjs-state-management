import './TaskPreview.css';

function TaskPreview({ task }) {
    return (
        <article className={task.completed? ["TaskPreview", "greenBG","whiteC"].join(" ") : ["TaskPreview","yellowBG"].join(" ")}>
            <p>
                {task.content}
                <span>
                    {task.completed ? <span class="material-symbols-outlined">
                        done
                    </span> : <span class="material-symbols-outlined">
                        hourglass_empty
                    </span>}
                </span>
            </p>

        </article>
    );
}



export default TaskPreview;