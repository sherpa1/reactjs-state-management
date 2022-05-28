import TasksMaster from '../components/TasksMaster';
import ThemeContext from '../contexts/ThemeContext';

function HomePage() {
    return (
        <ThemeContext.Consumer>
            {({ theme }) => (

                <main>
                    <h1>React State Management with Context</h1>
                    <div><p>{theme === "light" ? <span class="material-symbols-outlined">
                        light_mode
                    </span> : <span class="material-symbols-outlined">
                        dark_mode
                    </span>}</p></div>
                    {theme} mode
                    <TasksMaster />
                </main>
            )}
        </ThemeContext.Consumer>
    );
}

export default HomePage;