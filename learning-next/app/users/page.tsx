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
        const res = await fetch('https://jsonplaceholder.typicode.com/users')
        //annotate this variable below that is a type of array with Users 
        const users: User[] = await res.json()
        //we can render this data into a list
    
    return (
        <>
        <h1  className='text-xs text-red-500'> Users</h1>
        <p>{new Date().toLocaleTimeString()}</p>
        {/*when we have caching it will treat the data as static data*/}
        {/*However if it is not caching enabled then it will be dynamic because it will think there is new data everytime */}
        {/*lets have a key and a name for each user in this list */}
        <ul className='text-xs text-red-500'>
        {users.map(user => <li key={user.id}>{user.name}</li>)}
        </ul>
        </>
    )
    }

    export default usersPage