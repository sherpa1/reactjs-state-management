import TasksMaster from '../../components/TasksMaster/TasksMaster';

function HomePage() {
    return (
        <main>
            <h1>React State Management with Redux</h1>
            {/* <div><p>{theme === "light" ? <span class="material-symbols-outlined">
                light_mode
            </span> : <span class="material-symbols-outlined">
                dark_mode
            </span>}</p></div>
            {theme} mode */}
            <TasksMaster />
        </main>
    );
}

export default HomePage;