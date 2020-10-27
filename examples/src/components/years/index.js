import React, { useState } from 'react';

import { years } from 'popcorn-tools';

export default function Years() {
  const [states] = useState(years(10, 10))
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