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

## Options

``naruto`` accepts an optional object as its only parameter that allows
you to override the default settings.  Options include:

| Key     | Type | Default | Description                             |
|---------|------|---------|-----------------------------------------|
|duration |int   |500      |duration of the animation (milliseconds) |
|size     |int   |50       |size of the Naruto image (pixels)        |

```js
// make Naruto even faster!
naruto({duration: 200})
```

## react-router-dom integration

To see Naruto on every page change, subscribe to location changes:

```js
import naruto from 'animexyz'
import React from 'react'
import { useLocation } from 'react-router-dom'

export function YourComponent() {
    let location = useLocation()

    useEffect(naruto, [location])
}
```
