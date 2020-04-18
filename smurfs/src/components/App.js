import React, {  useState } from 'react';
import "./App.css";
import SmurfList from './SmurfList';
import  { addSmurfs } from '../actions'; 
import { connect } from 'react-redux';


function App (props) {
  const [fields, setFields] = useState({
    name: '',
    age: '',
    height: ''
  })

const handleChange = (event) => {
  setFields({
    ...fields,
    [event.target.name]: event.target.value,
  })
} 

const handleSubmit = (event) => {
  event.preventDefault()
  props.addSmurfs(fields);
  setFields({
    name: '',
    age: '',
    height: ''
  })
}


    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your state management version of Smurfs!</div>
        <form>
          <label> Add Smurfs to Smurf village:
            <br></br>
            <input
            name="name"
            onChange={handleChange}
            type="text"
            value={fields.name}
            placeholder="Name"
            />
             <input
            name="age"
            onChange={handleChange}
            type="text"
            value={fields.age}
            placeholder="age"
            
            />
             <input
            name="height"
            onChange={handleChange}
            type="text"
            value={fields.height}
            placeholder="height"
            />
          </label>
          <button type="submit" onClick={handleSubmit}>Add</button>
        </form>
       <SmurfList/>
      </div>
    );
  
}

export default connect(null, { addSmurfs })(App);
