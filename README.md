# class-lifecycle-hooks

Class lifecycle lifecycle hooks

```bash
yarn add class-lifecycle-hooks
```

## Usage

```js
import {
  useComponentDidMount,
  useComponentDidUpdate,
  useComponentWillUnmount,
} from 'class-lifecycle-hooks';

function App() {
  useComponentDidMount(() => {
    console.log('mounted');
  });
  useComponentDidUpdate(() => {
    console.log('component did update');
  });
  useComponentWillUnmount(() => {
    console.log('component unmounted');
  });
}

```

## License
MIT
