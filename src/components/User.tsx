import { useState, FormEvent } from 'react';

import { Button } from '../UI/Button';
import { NotificationModal } from '../UI/NotificationModal';
import { Content, UserList } from './UserStyle';


interface UserProps {
  id: string;
  name: string;
  age: string;
}

interface ErrorProps {
  title: string;
  message: string;
}

export function User() {
  const [users, setUsers] = useState<UserProps[]>([]);
  const [error, setError] = useState<ErrorProps>();

  const [enterUsername, setEnterUsername] = useState('');
  const [enterAge, setEnterAge] = useState('');



  const addUser = (name: string, age: string)=> {
    setUsers([...users, { 
      name,
      age, 
      id: Math.random().toString() 
    }])
  }


  const addUserHandler = (event: FormEvent)=> {
    event.preventDefault();

    if(enterUsername.trim().length === 0 && enterAge.trim().length === 0) {
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid name and age (non-empty values)',
        
      })
      return;
    }

    if(+enterAge < 1) {
      setError({
        title: 'Invalid age',
        message: 'Please enter a valid age (> 0)',
      })
      return;
    }

    addUser(enterUsername, enterAge);

    setEnterUsername('');
    setEnterAge('');
  }


  return (
    <>
      {error && 
        (
          <NotificationModal 
            title={error.title} 
            message={error.message}
            onConfirm={()=> setError(undefined)}
          />
        )
      }

      <Content onSubmit={addUserHandler}>
        <h1 
          style={{ 
            marginBottom: '1rem', 
            marginTop: '1rem' 
          }}>
            User list
        </h1>

        <label htmlFor="username">Username</label>
        <input 
          id="username" 
          type="text" 
          value={enterUsername}
          onChange={(e)=> setEnterUsername(e.target.value)}
        />

        <label htmlFor="age">Age</label>
        <input 
          id="age" 
          type="number" 
          value={enterAge}
          onChange={(e)=> setEnterAge(e.target.value)}
        />

        <Button
          type="submit"
        >
          Add New User
        </Button>
      </Content>

      <UserList>
        <ul>
          {users.map(user => (
            <li key={user.id}>
              {user.name} ({user.age} years old)
            </li>
          ))}
        </ul>
      </UserList>
    </>
  )
}