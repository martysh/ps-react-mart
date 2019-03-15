import React from 'react';
import styled from 'styled-components';
import Button from 'ps-react/Button';
import EyeIcon from 'ps-react/EyeIcon';
import PlusIcon from 'ps-react/PlusIcon';


const DecoratedButton = styled(Button)`
    margin-left 0.5em;
`;

/** Optional Button */
export default function ExampleButtons() {
  return (<>
    <DecoratedButton >regular</DecoratedButton>
    <DecoratedButton primary >primary</DecoratedButton>
    <DecoratedButton ><EyeIcon/></DecoratedButton>
    <DecoratedButton primary disabled >primary</DecoratedButton>
    <DecoratedButton primary theme={{color:'papayawhip', bgColor: 'purple'}} >
      <PlusIcon/>
    different</DecoratedButton>
    <DecoratedButton primary theme={{fontSize:'2rem'}} >large button</DecoratedButton>
  </>)
}
