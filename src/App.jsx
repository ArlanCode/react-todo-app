import { useState } from 'react'
import { Button} from './components/Button'
import { Input } from './components/Input'
import { Form } from './components/Form'
import { Title } from './components/Title'
import { Container } from './components/Container'
import { TaskItem } from './components/TaskItem'
import { Flex } from './components/Flex'


function App() {
  const [task, setTask] = useState("");
  const [listTask, setListTask] = useState([]);

  function add(event){
    event.preventDefault()
    if (!task) return;
    setListTask([...listTask, { text: task, checked: false }]);
    setTask("");
  }

  function removeTask(index){
    const newList = [...listTask];
    newList.splice(index,1);
    setListTask([...newList]);
  };

  const toggleChecked = (index) => {
    const newList = [...listTask];
    newList[index].checked = !newList[index].checked;
    setListTask([...newList]);
  };

  return (
      <Container>
        <Title lineHeight={'90px'}>To Do List</Title>
        <Form marginBottom={'50px'} onSubmit={add}>
          <Input
          value={task}
          placeholder= "Digite sua tarefa"
          onChange={(e) => setTask(e.target.value)}
          />
          <Button type='submit'>Add</Button>
        </Form>

        <Flex>
          {listTask.map((task, index) => (
            <ul>
            <TaskItem key={index} checked={task.checked} >
              <p>{task.text}</p>
              <button onClick={() => toggleChecked(index)}>
                  <i class="bx bx-check "></i>
              </button>

              <button onClick={() => removeTask(index)} >
                  <i  class="bx bx-x "></i>
              </button>
            </TaskItem>
            </ul>
          ))}
        </Flex>
      </Container>
  )
}

export default App
