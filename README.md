# Nuxt 3 Minimal Starter

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview

# bun
bun run preview
```

### Vue.js 3 v-model two-way data binding for Dummies

![Vue.js 3 v-model two-way data binding for Dummies](image.png)

Vue `v-model` is a directive that creates a two-way data binding between a value in our template and a value in our data properties, while `v-bind` only binds data one way. 

#### v-model directive explained
Vue's v-model directive does the following under the hood:

```js
<MyChild v-model="someRef" />

<MyChild
    :modelValue="someRef"
    @update:modelValue="someRef = $event"
/>

```

By default, the following applies to `v-model`:
- default prop name is `modelValue`
- default event is `update:modelValue`

This prop and event name will then be available in your child component.

### CustomInput form component

In this example, we are building a `CustomInput` form component that wraps the native `<input>` HTML element. It could then be used like this from our parent component:

```js
<script setup>
import { ref } from 'vue'
import CustomInput from './CustomInput.vue'

const fullname = ref('')
</script>

<template>
    <form>
        <CustomInput v-model="fullname" />
    </form>
</template>
```

Our child component (basic `CustomInput` form component) looks like this:

```js
//  CustomInput.vue
<script setup>
defineProps(['modelValue'])
defineEmits(['update:modelValue'])
</script>

<template>
    <input
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
    />
</template>
```

In this example, the data we are binding to our event is `$event.target.value` which is the actual String value of this `input` field.

> Remember: Native HTML elements always fire `Events`, so you'll never get a primitive (like e.g. a Boolean or a String) as `$event`. That's why you need to retrieve the effective input element's value with `$event.target.value` in this case.

