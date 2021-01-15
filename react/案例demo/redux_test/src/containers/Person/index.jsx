import React, { Component } from 'react'

import {addPerson} from '../../redux/action/person'
import {connect} from 'react-redux'
import {nanoid} from 'nanoid'

class Person extends Component {
  addPerson = () => {
    console.log('@', this.props);
    const name = this.nameNode.value
    const age = this.ageNode.value
    const id = nanoid()
    this.props.addPerson({id,name,age})
    this.nameNode.value = ''
    this.ageNode.value = ''
  }

  render() {
    const {persons} = this.props
    return (
      <div>
        <h2>和:{this.props.count}</h2>
        <input ref={c => this.nameNode = c} type="text" placeholder="输入姓名"/>
        <input ref={c => this.ageNode = c} type="text" placeholder="输入年龄"/>
        <button onClick={this.addPerson}>确认</button>
        <ul>
          {persons.length > 0 && persons.map((person) => {
            const {id,name, age} = person
            return ( <li key={id}>{name},{age}岁</li>)
          })}
        </ul>
      </div>
    )
  }
}

export default connect(
  state=>({persons: state.persons, count: state.count}),
  {
    addPerson
  }
)(Person)

