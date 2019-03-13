import React from 'react';
import PasswordInput from 'ps-react/PasswordInput';

function Example2() {
  return (
    <div>
      <PasswordInput htmlId="example2"
      name="firstname"
      value="somestupidpassword"
      quality={30}
      showVisibilityToggle
      onChange={()=> {}}/>
    </div>
  )
}

export default Example2
