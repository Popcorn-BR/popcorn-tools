import React, { useState } from 'react';

import { years } from 'popcorn-tools';

import { Container } from './styles';

export default function Years() {
  const [states, setStates] = useState(years(10, 10))
  return (
    <select>
      {
        states.map(state =>
          <option key={state}>{state}</option>
        )
      }
    </select>
  );
}