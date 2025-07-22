import React from 'react'
//we can define a type for the user
//make in interface for users and assign attributes 
interface User{
  id: number;
  name: string; 
}
  const usersPage = async () => {
    //use the fetch function to get data from backend/api endpoint 
    //sending http requests
    //this is async 
    //this is very simple to do so as you can see 
    //btw this is retruning a promise so we await it 
    //we can either also not store cache or 
    const res = await fetch('https://jsonplaceholder.typicode.com/users', {cache: 'no-store'})
    //annotate this variable below that is a type of array with Users 
    const users: User[] = await res.json()
    //we can render this data into a list
  
  return (
    <>
    <h1> Users</h1>
    <p>{new Date().toLocaleTimeString()}</p>
    {/*lets have a key and a name for each user in this list */}
    <ul>
      {users.map(user => <li key={user.id}  style={{ color: 'black' }}>{user.name}</li>)}
    </ul>
    </>
  )
}

export default usersPage