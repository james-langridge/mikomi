# mikomi

> Utilities for calculating probabilities.
 
## Install

```sh
npm install mikomi
```

## Usage

```js
import { potOdds } from 'mikomi';

// 0.273 - must win at least 27.3 % of the time for call to be proftable
const callOdds = potOdds({pot: 50, bet: 30});

// 0.375 - bluff must be successful at least 37.5 % of the time to be profitable
const bluffOdds = potOdds({pot: 50, bet: 30, isBuff: true})
```