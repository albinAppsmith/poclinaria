import React, { useState } from 'react';
import './App.css';
import Button from './Button';
import ButtonTwo from './ButtonTwo';

function App() {
  const [buttonTwos, setButtonTwos] = useState([]);
  const [key, setKey] = useState(1);
  const [componentProps, setComponentProps] = useState({
    size: 'medium',
    category: 'primary',
    isDisabled: false,
    icon: 'airplane',
    iconPosition: 'left',
    isLoading: false,
    text: 'Hello World'
  });

  const reRender = () => {
    setKey(key + 1);
  };

  const updateOnePropAndReRender = () => {
    setComponentProps({
      ...componentProps,
      icon: componentProps.icon === 'airplane' ? 'home' : 'airplane'
    });
  };

  const updateAllPropsAndReRender = () => {
    setComponentProps({
      size: componentProps.size === 'medium' ? 'large' : 'medium',
      category: componentProps.category === 'primary' ? 'secondary' : 'primary',
      isDisabled: componentProps.isDisabled ? false : true,
      icon: componentProps.icon === 'airplane' ? 'home' : 'airplane',
      iconPosition: componentProps.iconPosition === 'left' ? 'right' : 'left',
      text: componentProps.text === 'Hello World' ? 'Goodbye World' : 'Hello World'
    });
  };

  const addFiveButtonTwo = () => {
    const buttonTwoProps = {
      size: 'large',
      category: 'secondary',
      isDisabled: false,
      icon: 'home',
      iconPosition: 'right',
      isLoading: false,
      text: 'Hello World from Button #2'
    };

    setButtonTwos([
      ...buttonTwos,
      <ButtonTwo {...buttonTwoProps} />,
      <ButtonTwo {...buttonTwoProps} />,
      <ButtonTwo {...buttonTwoProps} />,
      <ButtonTwo {...buttonTwoProps} />,
      <ButtonTwo {...buttonTwoProps} />
    ]);
  };

  return (
    <>
      <div>
        <button onClick={reRender}>Re-render</button>
        &emsp;|&emsp;
        <button onClick={updateOnePropAndReRender}>Update 1 prop and Re-render</button>
        &emsp;|&emsp;
        <button onClick={updateAllPropsAndReRender}>Update ALL props and Re-render</button>
        &emsp;|&emsp;
        <button onClick={addFiveButtonTwo}>Add 5 Button #2</button>
      </div>
      <hr />

      <Button {...componentProps} />
      <Button {...componentProps} />
      <Button {...componentProps} />
      <Button {...componentProps} />
      <Button {...componentProps} />
      <Button {...componentProps} />
      <Button {...componentProps} />
      <Button {...componentProps} />
      <Button {...componentProps} />
      <Button {...componentProps} />
      <Button {...componentProps} />
      <Button {...componentProps} />
      <Button {...componentProps} />
      <Button {...componentProps} />
      <Button {...componentProps} />
      <Button {...componentProps} />
      <Button {...componentProps} />
      <Button {...componentProps} />
      <Button {...componentProps} />
      <Button {...componentProps} />
      <Button {...componentProps} />
      <Button {...componentProps} />
      <Button {...componentProps} />
      <Button {...componentProps} />
      <Button {...componentProps} />
      <Button {...componentProps} />
      <Button {...componentProps} />
      <Button {...componentProps} />
      <Button {...componentProps} />
      <Button {...componentProps} />
      <Button {...componentProps} />
      <Button {...componentProps} />
      <Button {...componentProps} />
      <Button {...componentProps} />
      <Button {...componentProps} />
      <Button {...componentProps} />
      <Button {...componentProps} />
      <Button {...componentProps} />
      <Button {...componentProps} />
      <Button {...componentProps} />
      <Button {...componentProps} />
      <Button {...componentProps} />
      <Button {...componentProps} />
      <Button {...componentProps} />
      <Button {...componentProps} />
      <Button {...componentProps} />
      <Button {...componentProps} />
      <Button {...componentProps} />
      <Button {...componentProps} />
      <Button {...componentProps} />
      <Button {...componentProps} />
      <Button {...componentProps} />
      <Button {...componentProps} />
      <Button {...componentProps} />
      <Button {...componentProps} />
      <Button {...componentProps} />
      <Button {...componentProps} />
      <Button {...componentProps} />
      <Button {...componentProps} />
      <Button {...componentProps} />
      <Button {...componentProps} />
      <Button {...componentProps} />
      <Button {...componentProps} />
      <Button {...componentProps} />
      <Button {...componentProps} />
      <Button {...componentProps} />
      <Button {...componentProps} />
      <Button {...componentProps} />
      <Button {...componentProps} />
      <Button {...componentProps} />
      <Button {...componentProps} />
      <Button {...componentProps} />
      <Button {...componentProps} />
      <Button {...componentProps} />
      <Button {...componentProps} />
      <Button {...componentProps} />
      <Button {...componentProps} />
      <Button {...componentProps} />
      <Button {...componentProps} />
      <Button {...componentProps} />
      <Button {...componentProps} />
      <Button {...componentProps} />
      <Button {...componentProps} />
      <Button {...componentProps} />
      <Button {...componentProps} />
      <Button {...componentProps} />
      <Button {...componentProps} />
      <Button {...componentProps} />
      <Button {...componentProps} />
      <Button {...componentProps} />
      <Button {...componentProps} />
      <Button {...componentProps} />
      <Button {...componentProps} />
      <Button {...componentProps} />
      <Button {...componentProps} />
      <Button {...componentProps} />
      <Button {...componentProps} />
      <Button {...componentProps} />
      <Button {...componentProps} />
      <Button {...componentProps} />
      <Button {...componentProps} />

      {buttonTwos.map(item => item)}
    </>
  );
}

export default App;
