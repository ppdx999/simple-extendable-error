# simple-extendable-error


# Usage

```js

import {ExtendableError} from 'simple-extendable-error'

class MyError extends ExtendableError {}

function myfunc() {

try {
    doSomething()
} catch (err) {
    throw new MyError("myfunc error message come here", err)
}
```
