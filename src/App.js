import React, { useState } from 'react';
import './App.css';
import Button from './Button';

function App() {
  const [samples, setSamples] = useState(1);
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

  const renderComponent = () => {
    const componentToTest = <Button {...componentProps} />;

    if (samples === 1) {
      return componentToTest;
    } else {
      const components = [];
      for (let i = 0; i < samples; i++) {
        components.push(componentToTest);
      }
      return components;
    }
  };

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

  return (
    <>
      <div>
        Samples:&nbsp;
        <select
          onChange={({ target }) => setSamples(parseInt(target.value))}
          defaultValue={samples}
        >
          <option value="1">1</option>
          <option value="10">10</option>
          <option value="100">100</option>
        </select>
        &emsp;|&emsp;
        <button onClick={reRender}>Re-render</button>
        &emsp;|&emsp;
        <button onClick={updateOnePropAndReRender}>Update 1 prop and Re-render</button>
        &emsp;|&emsp;
        <button onClick={updateAllPropsAndReRender}>Update ALL props and Re-render</button>
      </div>
      <hr />

      {renderComponent()}
    </>
  );
}

export default App;
