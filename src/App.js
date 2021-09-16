import './App.css';
import TodoList from "./Todo/TodoList";

function App() {
    const todos = [
        {id: 1, completed: false, title: 'Первый таск'},
        {id: 2, completed: false, title: 'Второй таск'},
        {id: 3, completed: false, title: 'Третий таск'}
    ]


  return (
    <div className="wrapper">
      <TodoList todos = {todos}/>
    </div>
  );
}

export default App;
