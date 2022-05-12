# React Contracts by Network Leads

React components for Contracts

[![build status](https://img.shields.io/npm/l/@network-leads/react-contracts-js)](https://www.npmjs.com/package/@network-leads/react-contracts-js)
[![npm version](https://img.shields.io/npm/v/@network-leads/react-contracts-js)](https://www.npmjs.com/package/@network-leads/react-contracts-js)

This is a package to install the React fron-end plugin of creating, editing & signing contracts.
To interact with the API - see [contracts-js](https://github.com/network-leads/contracts-js)

### Minimal example

First, install react-contracts-js and
[contracts-js](https://github.com/network-leads/contracts-js).

```sh
npm install @network-leads/react-contracts-js
```

#### Using hooks

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import Contracts from "@network-leads/react-contracts-js";

const App = () => {

  const save = async (id) => {
      // id of the newly created template
  }
  
  return (
    <div>
        <Contracts publishKey={"XXXXXXXXXXXXXX"} onSave={save} />
    </div>
  );
};

ReactDOM.render(<App />, document.body);
```

### Minimum requirements

The minimum supported version of React is v16.8. If you use an older version,
upgrade React to use this library. If you prefer not to upgrade your React
version, we recommend using legacy.

### Contributing

If you would like to contribute to React Stripe.js, please make sure to read our
[contributor guidelines](CONTRIBUTING.md).