import { Container, FormContainer, Card } from './styles/styles';

import { BsPlusLg } from 'react-icons/bs';

import { FaTrashAlt} from 'react-icons/fa';

import { useState } from 'react';

function App(){

  const [task , setTask] = useState("");

  const [list, setList] = useState([]);

  function handleAdd(){

    if(!task){
      return;
    }

    const data = {
      id: Date.now(),
      item: task
    }

    setList(oldArray => [data, ...oldArray]);
    setTask("");
  }

  function handleDelete(item){
    
    let filterItem = list.filter((task) => {
      return task.item !== item
    })

    setList(filterItem);
  }

  return (
    <Container>
      <h1>To-do List</h1>
      <FormContainer>
        <input 
        type="text"
        placeholder="Digite sua tarefa"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        />

        <button onClick={handleAdd}>
          <BsPlusLg size={25} color="#FFF"/>
        </button> 
      </FormContainer>

      <Card>
      {list.map((item, index) => (
          <section key={item.id}>
            <ul>
              <li>
                <span>{item.item}</span>
              </li>
            </ul>
              <button onClick={() => handleDelete(item.item)}>
                <FaTrashAlt size={20} color="#e02727"/>
              </button>
          </section>
     ))}
      </Card>
    </Container>
  )
}

export default App;
