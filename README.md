# mikomi

> Utilities for calculating probabilities.

## Install

```sh
npm install mikomi
```

## Usage

```js
import { potOdds } from "mikomi";

// 0.273 - must win at least 27.3 % of the time for call to be proftable
const percentage = potOdds({ pot: 80, bet: 30 });
```
