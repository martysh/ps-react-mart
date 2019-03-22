import styled from 'styled-components';

export const SelectBoxDiv = styled.div`
  box-sizing: border-box;
  & * {
    box-sizing: inherit;
  }
  position: absolute;
  left: 0;
`;

export const SelectBoxContainer = styled.div`
  border: 1px solid #aaa;
  display: flex;
  width: 100%;
  margin: 0;
  padding: 0;
`;

export const OptionsDiv = styled.div`
  display: ${props => (props.showItems ? 'block' : 'none')};
`;

export const SelectedItem = styled.div`
  padding: 0.5em 0.8em;
  display: inline-block;
  height: 100%;
  width: 100%;
  vertical-align: middle;
`;

export const Arrow = styled.div`
  padding: 0.5em;
  background-color: #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  &:after {
    content: ' ';
    width: 1em;
    height: 1em;
    margin: 0;
    padding: 0;
    display: inline-block;
    border: solid black;
    border-width: 0 0.2em 0.2em 0;
    transform: ${props =>
      props.showItems ? 'rotate(45deg)' : 'rotate(225deg)'};
    transition: transform 0.2s linear;
  }
`;

export const ItemDiv = styled.div`
  border-bottom: 1px solid #ddd;
  border-left: 1px solid #ddd;
  border-right: 1px solid #ddd;
  padding: 0.3em 0.7em;
  &:hover {
    color: darkblue;
  }
`;
