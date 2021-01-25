# animeXYZ

An animation library that makes a tiny Naruto run across the bottom of
your screen every time a new page loads.


## Usage

Import the package and invoke the function to see Naruto run across the
bottom of your screen.

```js
import naruto from 'animexyz'

naruto()
```

## react-router-dom integration

To see Naruto on every page change, subscribe to location changes:

```js
import naruto from 'animexyz'
import { useLocation } from 'react-router-dom'

export function YourComponent() {
    let location = useLocation()

    useEffect(naruto, [location])
}
```
