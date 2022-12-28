import React from 'react';
import { cx } from '@linaria/core';
import { css } from '@linaria/atomic';

const StyledButton = css`
  display: flex;
  align-items: center;
  justify-content: center;
  border-style: solid;
  border-radius: 0.25rem;
  font-weight: 500;
  text-align: center;
  cursor: pointer;
  padding: 0.5rem;
  border-width: 1px;
  border-color:var(--ads-color-orange-500);
  font-size: 1rem;
  margin: 0;
  background-color: var(--ads-color-orange-500);
  color: var(--ads-color-black-0);
`;

const Button = (props) => {
  return (
    <button className={cx(StyledButton)} {...props}>
      { props.children }
    </button>
  );
}

export default Button;
