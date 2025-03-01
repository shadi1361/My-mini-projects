import React from 'react'

function User(props:{name:string, age:number , hasChild:boolean}) {
  return (
    <div>
        <h2>{props.name}</h2>
        <h2>{props.age}</h2>
        <h2>hasChild:{`${props.hasChild}`} </h2>
    </div>
  )
}

export default User
