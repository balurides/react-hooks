import React,{useState} from 'react';
import Form from "./Form";
import LoginV1 from './components/Login_v1';

function App() {
  const [todos, setTodos] = useState([]);
  return(
      <div>
        <Form 
          onSubmit={text => setTodos([{text,completed:false},...todos])}
        />
        <div>
        { todos.map(({ text }) => (
              <div key={text}>
                {text}
              </div>
          ))}
        </div>
        <button onClick={() => setTodos([])}>Reset</button>
        <br />
        <LoginV1 />
      </div>
  );
}

export default App;
