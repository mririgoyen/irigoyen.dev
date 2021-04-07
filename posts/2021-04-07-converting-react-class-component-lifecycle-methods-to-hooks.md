---
title: Converting React Class Component Lifecycle Methods to Hooks
description: Learn how to implement traditional React lifecycle methods using Hooks.
date: 2021-04-07
image: react-hooks.png
category: Development
---

Since the addition of "Hooks" to React in v16.8, the overwhelming recommendation in the React community is to use Functional Components in place of Classes. Functional Components are typically easier to read, maintain, and test compared to their Class-based equivalents. However, utilizing Hooks changes how you work with the Component lifecycle.

I was recently part of an effort to migrate legacy React code from Class-based Components into Functional Components. Quite frequently, I was asked how to translate certain lifecycle methods into their Hook equivalents, so I created this cheat sheet to share with the engineering team. If you're looking for a better understanding on the React lifecycle using Hooks, I hope that this is a useful reference.

## Table of Contents

- [`constructor()`](#constructor)
- [`render()`](#render)
- [`componentDidMount()`](#componentdidmount)
- [`componentWillUnmount()`](#componentwillunmount)
- [`componentDidUpdate()`](#componentdidupdate)
- [`getDerivedStateFromProps()`](#getderivedstatefromprops)
- [`shouldComponentUpdate()`](#shouldcomponentupdate)
- [`UNSAFE_componentWillMount()`](#unsafe_componentwillmount)
- [`UNSAFE_componentWillUpdate()`](#unsafe_componentwillupdate)
- [`UNSAFE_componentWillReceiveProps()`](#unsafe_componentwillreceiveprops)
- [`getSnapshotBeforeUpdate()`](#getsnapshotbeforeupdate)
- [`getDerivedStateFromError()`](#getderivedstatefromerror-%2F-componentdidcatch)
- [`componentDidCatch()`](#getderivedstatefromerror-%2F-componentdidcatch)

---

### constructor

Functional Components don't require a `constructor`. Traditionally, the use of a `constructor` was to set the initial state or define refs. Instead, use the [`useState`](https://reactjs.org/docs/hooks-reference.html#usestate) or [`useRef`](https://reactjs.org/docs/hooks-reference.html#useref) hooks at the top of your function.

```js
const MyComponent = () => {
  const [ isVisible, setIsVisible ] = useState(false);
  const containerRef = useRef();

  return (
    <div ref={containerRef}>
      {isVisible && <p>Hello there!</p>}
      <button onClick={() => setIsVisible(!isVisible)}>Toggle Visibility</button>
    </div>
  );
};
```

---

### render

Simply `return` from your Functional Component. Any `return` from your function is the equivalent to a `render`.

---

### componentDidMount

If you only want to run logic when the components mounts, you are going to utilize the `useEffect` hook. Provide an empty dependency array to instruct React to only run the code on mount.

```js
useEffect(() => {
  // Run this code...
}, [
  // ...only on mount
]);
```

---

### componentWillUnmount

Once again, we'll be utilizing the `useEffect` hook. The dependency array will be the same as `componentDidMount`. The difference here is that we are going to `return` a function inside of the `useEffect` hook. This function gets called when the component is unmounting.

```js
useEffect(() => {
  // Run this code on mount

  return () => {
    // Run this code on unmount
  }
}, []);
```

---

### componentDidUpdate

To run code when the component updates, you are going to utilize the `useEffect` hook again. However, this time you are going to provide some variables to the dependency array. Any time one of these variables changes, the hook will fire.

```js
useEffect(() => {
  // This code runs when `user` is changed
}, [ user ]);
```

You may also completely omit the dependency array. Omitting the dependency array completely will make your code inside the `useEffect` run on _every single change_ to the component. This could have potentially negative effects, especially around rerenders and performance. In nearly every case, you should provide an empty array or an array with the dependencies to watch.

```js
useEffect(() => {
  // This code runs on every render
});
```

**NOTE:** This is different than providing an empty array as in the `componentDidMount` example.

---

### getDerivedStateFromProps

While it is [unlikely that you will need it](https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html), you can simply update the state during render. React will run the component again immediately after the first render with the updated state. While this may seem like the wrong way to handle this, an update during rendering is how  `getDerivedStateFromProps` has always worked under the hood.

Store the incoming props you want to watch for changes in state. Then do comparisons to update other state variables as necessary.

```js
const MyComponent = ({ item }) => {
  const [ lastUpdated, setLastUpdated ] = useState(new Date());
  const [ prevItem, setPrevItem ] = useState(null);

  if (item !== prevItem) {
    setLastUpdate(new Date());
    setPrevItem(item);
  }

  return <p>Last Updated: {lastUpdated.toLocaleTimeString('en-US')}</p>;
};
```

---

### shouldComponentUpdate

There isn't a direct "Hooks" way of reimplementing `shouldComponentUpdate`, but you can wrap you Functional Component in `React.memo()`.

```js
const MyComponent = ({ id, name }) => {
  return <div id={id}>{name}</div>;
};

React.memo(MyComponent, (props, nextProps) => {
  // Don't rerender if the id hasn't changed
  return props.id === nextProps.id;
});
```

---

### UNSAFE_componentWillMount

This lifecycle method was deprecated and marked `UNSAFE` by the React team for Class-based Components.

In the majority of circumstances, you should be able to utilize `useState` and/or `useEffect` hooks to achieve similar effects to `componentWillMount`.

For example, if you just need to set an initial state, you can do that directly in the `useState` hook.

```js
const MyComponent = () => {
  const [ description, setDescription ] = useState('This is my default description.');
};
```

If you need to set initial state from a longer running process, you can use a combination of `useState` and `useEffect`.

```js
const MyComponent = () => {
  const [ loading, setLoading ] = useState(true);
  const [ data, setData ] = useState();

  useEffect(() => {
    fetch('http://example.com/movies.json')
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, [
    // Run only on mount
  ]);

  if (loading) {
    return <IndeterminateLoader />;
  }

  return <div>{data}</div>;
};
```

---

### UNSAFE_componentWillUpdate

This lifecycle method was deprecated and marked `UNSAFE` by the React team for Class-based Components.

The recommendation by the React team is to treat this like `componentDidUpdate`, so [check out that section](#componentdidupdate) to see how you could handle in with Hooks.

---

### UNSAFE_componentWillReceiveProps

This lifecycle method was deprecated and marked `UNSAFE` by the React team for Class-based Components.

If you need to compare new updates to props as they come in, you can [implement your own custom hook](https://reactjs.org/docs/hooks-custom.html), utilizing the `useRef` and `useEffect` hooks to store previous values. We don't store the previous values in state because every change would rerender the component.

```js
// Create a custom `usePrevious` hook
const usePrevious = (value) => {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
};

const MyComponent = ({ score }) => {
  const prevScore = usePrevious(score);

  useEffect(() => {
    if (prevScore !== score) {
      // Score changed, do something
    }
  }, [ score ]);
};
```

---

### getSnapshotBeforeUpdate

As of this time, there is [currently no way to reimplement this lifecycle method in hooks](https://reactjs.org/docs/hooks-faq.html#do-hooks-cover-all-use-cases-for-classes).

There is a [very well-written article by Ohans Emmanuel](https://blog.logrocket.com/how-is-getsnapshotbeforeupdate-implemented-with-hooks/) who tried to implement `getSnapshotBeforeUpdate` in Hooks, but proves it is not currently possible.

---

### getDerivedStateFromError / componentDidCatch

As of this time, there is [currently no way to reimplement these lifecycle methods in hooks](https://reactjs.org/docs/hooks-faq.html#do-hooks-cover-all-use-cases-for-classes).

If you need to implement Error Boundaries in your application, you can build a [Higher Order Component](https://reactjs.org/docs/higher-order-components.html) (HOC) to wrap your Functional Components with. Build your HOC as a Class-based component to utilize these lifecycle methods. It is important to note that you can use Class and Functional components in the same application; whether a component is a Class or Functional is an implementation detail of that component.

---

## Wrapping Things Up

Hopefully, this acts as a quick reference if you are trying to convert or understand how the React lifecycle translates into Hooks. However, the examples and suggestions here only scratch the surface of some of the complexities of implementing Hooks. I highly recommend reading the [Rules of Hooks](https://reactjs.org/docs/hooks-rules.html) and make sure to add and enable the [ESLint React Hooks plugin](https://www.npmjs.com/package/eslint-plugin-react-hooks).
