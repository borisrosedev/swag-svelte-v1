# Svelte

## script module 


A ```<script>``` tag with a module attribute runs once when the module ***first evaluates***, rather than for each component instance. Variables declared in this block can be referenced elsewhere in the component, but not vice versa

## .svelte.ts

Besides .svelte files, Svelte also operates on .svelte.js and .svelte.ts files.

These behave like any other .js or .ts module, except that you can use ***runes***. 

This is useful for creating reusable reactive logic, or sharing reactive state across your app (though note that you cannot export reassigned state).

## Runes

Runes are symbols that you use in .svelte and .svelte.js / .svelte.ts files to control the Svelte compiler. 


If you think of Svelte as a language, runes are part of the syntax — they are keywords.

Runes have a $ prefix and look like functions:

```ts
let message = $state('hello');
```


The $state rune allows you to create reactive state, which means that your UI reacts when it changes.

```svelte
<script>
	let count = $state(0);
</script>

<button onclick={() => count++}>
	clicks: {count}
</button>
``` 


## Deep state

If $state is used with an array or a simple object, the result is a deeply reactive state proxy. 

<strong style="color:rgb(0,220,0)">Proxies</strong> allow Svelte to run code when you read or write properties, including via methods like array.push(...), triggering granular updates.

State is proxified recursively until Svelte finds something other than an array or simple object (like a class or an object created with Object.create). In a case like this...

```ts
let todos = $state([
	{
		done: false,
		text: 'add more todos'
	}
]);

```

...modifying an individual todo’s property will trigger updates to anything in your UI that depends on that specific property:

```ts 
todos[0].done = !todos[0].done;
```

## Careful with the destructuring

Note that if you destructure a reactive value, the references are not reactive — as in normal JavaScript, they are evaluated at the point of destructuring:

```ts
let { done, text } = todos[0];

// this will not affect the value of `done`
todos[0].done = !todos[0].done;
```

## $state.raw

In cases where you don’t want objects and arrays to be deeply reactive you can use $state.raw.

State declared with $state.raw cannot be mutated; it can only be reassigned. In other words, rather than assigning to a property of an object, or using an array method like push, replace the object or array altogether if you’d like to update it:

```ts
let person = $state.raw({
	name: 'Heraclitus',
	age: 49
});

// this will have no effect
person.age += 1;

// this will work, because we're creating a new person
person = {
	name: 'Heraclitus',
	age: 50
};
```

This can improve performance with large arrays and objects that you weren’t planning to mutate anyway, since it avoids the cost of making them reactive. Note that raw state can contain reactive state (for example, a raw array of reactive objects).

As with $state, you can declare class fields using $state.raw.


## $state.snapshot

To take a static snapshot of a deeply reactive $state proxy, use $state.snapshot

```svelte
<script>
	let counter = $state({ count: 0 });

	function onclick() {
		// Will log `{ count: ... }` rather than `Proxy { ... }`
		console.log($state.snapshot(counter));
	}
</script>
```

This is handy when you want to pass some state to an external library or API that doesn’t expect a proxy, such as structuredClone

## $state.eager

When state changes, it may not be reflected in the UI immediately if it is used by an await expression, because updates are synchronized.

In some cases, you may want to update the UI as soon as the state changes. For example, you might want to update a navigation bar when the user clicks on a link, so that they get visual feedback while waiting for the new page to load. 

To do this, use $state.eager(value):
```svelte
<nav>
	<a href="/" aria-current={$state.eager(pathname) === '/' ? 'page' : null}>home</a>
	<a href="/about" aria-current={$state.eager(pathname) === '/about' ? 'page' : null}>about</a>
</nav>
```

Use this feature sparingly, and only to provide feedback in response to user action — in general, allowing Svelte to coordinate updates will provide a better user experience.


## Passing state into functions

```ts
function add(a: number, b: number) {
	return a + b;
}

let a = 1;
let b = 2;
let total = add(a, b);
console.log(total); // 3

a = 3;
b = 4;
console.log(total); // still 3!
```

If add wanted to have access to the current values of a and b, and to return the current total value, you would need to use functions instead:

```ts
function add(getA: () => number, getB: () => number) {
	return () => getA() + getB();
}

let a = 1;
let b = 2;
let total = add(() => a, () => b);
console.log(total()); // 3

a = 3;
b = 4;
console.log(total()); // 7
```

State in Svelte is no different — when you reference something declared with the $state rune...

```ts
let a = $state(1);
let b = $state(2);
```

...you’re accessing its current value.

Note that ‘functions’ is broad — it encompasses properties of proxies and get/set properties...

```ts 
function add(input: { a: number, b: number }) {
	return {
		get value() {
			return input.a + input.b;
		}
	};
}

let input = $state({ a: 1, b: 2 });
let total = add(input);
console.log(total.value); // 3

input.a = 3;
input.b = 4;
console.log(total.value); // 7
```
...though if you find yourself writing code like that, consider using classes instead.


## Passing state across modules

You can declare state in .svelte.js and .svelte.ts files, but you can only export that state if it’s not directly reassigned. In other words you can’t do this:

```ts
/// IMPOSSIBLE
export let count = $state(0);

export function increment() {
	count += 1;
}
```

Since the compiler only operates on one file at a time, if another file imports count Svelte doesn’t know that it needs to wrap each reference in 
$.get and $.set:


```ts
import { count } from './state.svelte.js';

console.log(typeof count); // 'object', not 'number'
```

This leaves you with two options for sharing state between modules — either don’t reassign it...

```ts 
// This is allowed — since we're updating
// `counter.count` rather than `counter`,
// Svelte doesn't wrap it in `$.state`
export const counter = $state({
	count: 0
});

export function increment() {
	counter.count += 1;
}
```

...or don’t directly export it:

```ts
let count = $state(0);

export function getCount() {
	return count;
}

export function increment() {
	count += 1;
}
```


## goto


Allows you to navigate programmatically to a given route, with options such as keeping the current element focused. Returns a Promise that resolves when SvelteKit navigates (or fails to navigate, in which case the promise rejects) to the specified url.

For external URLs, use window.location = url instead of calling goto(url).

```ts
function goto(
	url: string | URL,
	opts?: {
		replaceState?: boolean | undefined;
		noScroll?: boolean | undefined;
		keepFocus?: boolean | undefined;
		invalidateAll?: boolean | undefined;
		invalidate?:
			| (string | URL | ((url: URL) => boolean))[]
			| undefined;
		state?: App.PageState | undefined;
	}
): Promise<void>;
```
