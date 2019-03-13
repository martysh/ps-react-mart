import React from 'react';
import TextInput from 'ps-react/TextInput';

function ExampleError() {
  return (
    <div>
      <TextInput htmlId="example-optional"
      required
      label="First Name"
      name="firstname"
      error="First name is required."
      onChange={()=> {}}/>
    </div>
  )
}

export default ExampleError
