import Tablr from './Tablr';


const tablr = new Tablr('#has-schema', {
  columns: [
    {
      id: 'userId',
      label: 'UserID',
      dataType: 'number',
    },
    {
      id: 'firstName',
      label: 'First Name',
      dataType: 'string',
    },
    {
      id: 'lastName',
      label: 'Last Name',
      dataType: 'string',
    },
    {
      id: 'age',
      label: 'Age',
      dataType: 'number',
    },
  ],
  rows: [
    {
      userId: 5930,
      firstName: 'Matt',
      lastName: 'Palmer',
      age: 25,
    },
    {
      userId: 4920,
      firstName: 'Adam',
      lastName: 'Lawrence',
      age: 31,
    },
  ],
});

console.log(tablr);


export default Tablr;
