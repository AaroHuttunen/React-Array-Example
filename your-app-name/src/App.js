import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import FormGroup from '@material-ui/core/FormGroup';
import Paper from '@material-ui/core/Paper';
import './App.css';

{/*Small React example. An array in which the user can add, delete and edit list of persons
  Made by Aaro Huttunen
  GitHub: https://github.com/AaroHuttunen/React-Array-Example
*/}

function App() {
  const [items, setItems] = React.useState([]);
  const [FirstName, setFirstName] = React.useState(["First Name"]);
  const [SurName, setSurName] = React.useState(["Surname"]);
  const [Age, setAge] = React.useState(["Age"]);
  const [selected, setSelected] = React.useState(-1);
  const [failsafe, setFailsafe] = React.useState(false);

  const updateFirstName = (event) => {
		setFirstName(event.target.value);
	}

  const updateSurName = (event) => {
	  setSurName(event.target.value);
  }

  const updateAge = (event) => {
    setAge(event.target.value);
  }

  {/*This is used for selecting the desired entry for deletion or editing.*/}
  const select = (event, index) => {
    setSelected(index);
    setFailsafe(true);
  }

  const add = (event) => {
	  setItems(items.concat([{"FirstName": FirstName, "Surname": SurName, "Age": Age}]));
	  console.log(items);
	}

  const remove = (event) => {
    if(failsafe == true){
      setItems(items.slice(0, selected).concat(items.slice(selected+1)));
	    setSelected(-1);
      setFailsafe(false);
    }
	}

  {/*This doesn't work, tried but counldn't figure out how to edit the array.
  const edit = (event) => {
	}
  */}

  return (
    <div>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell><h1 style={{color: "black"}}>First Name</h1></TableCell>
              <TableCell><h1 style={{color: "black"}}>Surname</h1></TableCell>
              <TableCell><h1 style={{color: "black"}}>Age</h1></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {items.map((row, index) => (
            <TableRow
              key={row.FirstName + "_" + index} 							
              button 
              selected={index === selected} 
              onClick={(event) => {select(event, index);}}
            >
              <TableCell>
                {row.FirstName}
              </TableCell>
              <TableCell>
                {row.Surname}
              </TableCell>
              <TableCell>
                {row.Age}
              </TableCell>
            </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <FormGroup>
        <TextField id={"FirstName"} value={FirstName} onChange={updateFirstName} label="First name: " />
        <TextField id={"Surname"} value={SurName} onChange={updateSurName} label="Surname: " />
        <TextField id={"Age"} value={Age} type="number" onChange={updateAge} label="Age: " />
      </FormGroup>
      <Button style={{height: '100px', width : '100px'}} variant="contained" id={"addButton"} onClick={add}>Add</Button>
      <Button style={{height: '100px', width : '100px'}} variant="contained" id={"removeButton"} onClick={remove} >Remove</Button>

      {/*This doesn't work, tried but counldn't figure out how to edit the array.
      <Button variant="contained" id={"editButton"} onClick={edit} >Edit</Button>
      */}
    </div>
  )
}

export default App;