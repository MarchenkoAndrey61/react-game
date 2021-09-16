import './App.css';
import TodoList from "./Todo/TodoList";

function App() {
    const todos = [
        {id: 1, completed: false, title: 'Первый таск'},
        {id: 2, completed: false, title: 'Второй таск'},
        {id: 3, completed: false, title: 'Третий таск'},
        {id: 4, completed: false, title: 'Четвертый таск'},
        {id: 5, completed: false, title: 'Пятый таск'}
    ]


  return (
    <div className="wrapper">
        <h1>TodoList</h1>
        <TodoList todos = {todos}/>
        ----
    </div>
  );
}

export default App;
