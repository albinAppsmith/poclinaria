import React from 'react';
import './App.css';
import Button from './Button';

function App() {
  return (
    <Button
      size="medium"
      category="primary"
      isDisabled={false}
      icon="airplane"
      iconPosition="left"
      isLoading={false}
      text="Hello World"
    />
  );
}

export default App;
