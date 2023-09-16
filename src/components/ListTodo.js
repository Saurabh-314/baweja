import React from 'react'
// import "../App.css";
import '../App.css';
const ListTodo = ({ todo, deleteHandler }) => {
  return (
    <div className='todo-container'>
      {
        todo.map((item) => {
          return (
            <div key={item.id} className="list-item" >
              <span className='item-id'>{item.id}</span>
              <span>{item.title}</span>

              <div className='action-btn'>
                {/* <span>{item.id}</span> */}
                <input type='checkBox' className='check-box' />
                <button className='dlt-btn' onClick={() => deleteHandler(item.id)}>Delete</button>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

export default ListTodo