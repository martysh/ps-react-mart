import React, { useState } from 'react';
import {
  OptionsDiv,
  Arrow,
  ItemDiv,
  SelectBoxDiv,
  SelectedItem,
  SelectBoxContainer,
} from './SelectBoxStyles';

function SelectBox({ options, name }) {
  const [items, setItems] = useState(options);
  const [showItems, setShowItems] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const toggleOpen = () => setShowItems(open => !open);
  const selectItem = i => {
    setSelectedIndex(i);
    setShowItems(false);
  };

  return (
    <div>
      <SelectBoxDiv>
        <SelectBoxContainer>
          <SelectedItem>{items[selectedIndex]}</SelectedItem>
          <Arrow showItems={showItems} onClick={toggleOpen} />
        </SelectBoxContainer>
        <OptionsDiv showItems={showItems}>
          {items.map((item, idx) => (
            <ItemDiv
              key={item}
              selected={selectedIndex === idx}
              onClick={() => selectItem(idx)}
            >
              {item}
            </ItemDiv>
          ))}
        </OptionsDiv>
      </SelectBoxDiv>
      <input type="hidden" value={items[selectedIndex]} name={name} />
    </div>
  );
}

export default SelectBox;
