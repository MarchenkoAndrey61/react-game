import './App.css';
import TodoList from "./Todo/TodoList";

function App() {
    const todos = [
        {id: 1, completed: false, title: 'Первый таск'},
        {id: 2, completed: false, title: 'Второй таск'},
        {id: 3, completed: false, title: 'Третий таск'},
        {id: 4, completed: false, title: 'четвертый таск'}
    ]


  return (
    <div className="wrapper">
        TodoList
        <TodoList todos = {todos}/>
        ----
    </div>
  );
}

export default App;
