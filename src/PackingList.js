import React from 'react'

function Item({name,isPacked}){
    if(isPacked){
        return <li className='item'>{name}<img className='icon' src='https://static.vecteezy.com/system/resources/previews/009/362/738/original/tick-icon-accept-approve-sign-design-free-png.png'></img></li>
    }
    return <li className='item'>{name}</li>
}


export default function PackingList() {
  return (
    <div>
      <section>
        <h1>Elvin's Packing List</h1>
        <ul>
        <Item isPacked={true} name="Space Suit"></Item>
        <Item isPacked={true} name="Helmet with a golden leaf"></Item>
        <Item isPacked={false} name="Photo of child"></Item>
        </ul>
      </section>
    </div>
  )
}
