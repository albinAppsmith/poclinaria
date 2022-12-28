import React, { useState } from 'react';
import './App.css';
import { cx } from '@linaria/core';
import { css } from '@linaria/atomic';
import Button from './Button';

const main = css`
  display: flex;
  flex-direction: row;
`;

const leftSection = css`
  flex: 1;
`;

const btnContainer = css`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
`;

const sidebar = css`
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
  border-width: 1px;
  border-style: solid;
  border-color: var(--ads-color-orange-500);
  background-color: white;
  height: 100%;
  width: 300px;
  padding-top: 4rem;
`;

const select = css`
  padding: 4px;
  border-width: 1px;
  border-style: solid;
`;

function App() {

  const [buttonCount, setButtonCount] = useState(5);
  const [padding, setPadding] = useState("0.5rem");
  const [borderWidth, setBorderWidth] = useState("1px");
  const [buttonColor, setButtonColor] = useState("var(--ads-color-orange-500)");
  const [fontSize, setFontSize] = useState("1rem");
  const [margin, setMargin] = useState("2px");
  const [color, setColor] = useState("var(--ads-color-black-0)");

  const buttons = [];
  for(let i = 0; i < buttonCount; i++) {
    buttons.push(
      <Button
        style={{
          padding,
          borderWidth: borderWidth,
          borderColor: buttonColor,
          fontSize,
          margin,
          backgroundColor: buttonColor,
          color,
        }}
        key={i.toString()}
      >
        Button
      </Button>
    );
  }

  return (
    <div className={cx(main)}>
      <div className={cx(leftSection)}>
        <h1>Buttons</h1>
        <div className={cx(btnContainer)}>
          {buttons}
        </div>
      </div>
      <div className={cx(sidebar)}>
        <label>Button Count</label>
        <input type="number" value={buttonCount} onChange={(e) => {
          setButtonCount(e.target.value);
          console.log(e.target.value);
        }} />
        <br/>
        <button onClick={() => setButtonCount(buttonCount + 10)}>Add 10</button>
        <br/>
        <button onClick={() => setButtonCount(buttonCount + 100)}>Add 100</button>
        <br/>
         <button onClick={() => setButtonCount(buttonCount + 1000)}>Render 1000 buttons</button>
        <br/>
        <label>Padding</label>
        <select className={cx(select)} value={padding} onChange={(e) => setPadding(e.target.value)}>
          <option value="0">Padding</option>
          <option value="0.5rem">0.5rem</option>
          <option value="1rem">1rem</option>
          <option value="1.5rem">1.5rem</option>
          <option value="2rem">2rem</option>
        </select>
        <br/>
        <label>Border Width</label>
        <select className={cx(select)} value={borderWidth} onChange={(e) => setBorderWidth(e.target.value)}>
          <option value="0">Border Width</option>
          <option value="1px">1 px</option>
          <option value="2px">2 px</option>
          <option value="3px">3 px</option>
        </select>
        <br/>
        <label>Button Color</label>
        <select className={cx(select)} value={buttonColor} onChange={(e) => setButtonColor(e.target.value)}>
          <option value="white">Button Color</option>
          <option value="var(--ads-color-orange-500)">Orange</option>
          <option value="blue">Blue</option>
          <option value="green">Green</option>
          <option value="red">Red</option>
        </select>
        <br/>
        <label>Font Size</label>
        <select className={cx(select)} value={fontSize} onChange={(e) => setFontSize(e.target.value)}>
          <option value="0">Font Size</option>
          <option value="1rem">1 rem</option>
          <option value="1.5rem">1.5 rem</option>
          <option value="2rem">2 rem</option>
        </select>
        <br/>
        <label>Margin</label>
        <select className={cx(select)} value={margin} onChange={(e) => setMargin(e.target.value)}>
          <option value="0">Margin</option>
          <option value="2px">2 px</option>
          <option value="4px">4 px</option>
          <option value="6px">6 px</option>
        </select>
        <br/>
        <label>Color</label>
        <select className={cx(select)} value={color} onChange={(e) => setColor(e.target.value)}>
          <option value="white">Color</option>
          <option value="var(--ads-color-black)">Black</option>
          <option value="white">White</option>
        </select>
      </div>
    </div>
  );
}

export default App;
