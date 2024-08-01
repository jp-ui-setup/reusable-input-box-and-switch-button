# Understanding Slots in Vue 3

Slots provide a mechanism for creating component templates that can receive content from the parent component. 

With slots, you can define placeholders in your component's template where the parent component can inject its content. 

## Default Slots


The default slot, also known as the unnamed slot, is the simplest type of slot. It allows the parent component to pass content directly into the component's template.

 Here's an example:

 ```js
//<!-- ChildComponent.vue -->
<template>
  <div>
    <slot></slot>
  </div>
</template>

// <!-- ParentComponent.vue -->
<template>
  <ChildComponent>
    <p>This content will be injected into the slot.</p> 
  </ChildComponent>
</template>
 ```
 ![Default Slots](image.png)

 ## Named Slots

 Named slots, also known as scoped slots, provide a way to have multiple slots within a component and give them distinct names. This allows the parent component to selectively inject content into specific slots.
 
Here's an example:

```js

//<!-- ChildComponent.vue -->
<template>
  <div>
    <slot name="header"></slot>
    <slot></slot>
    <slot name="footer"></slot>
  </div>
</template>

// <!-- ParentComponent.vue -->
<template>
  <ChildComponent>
    <template v-slot:header>
      <h1>Header content</h1>
    </template>

    <p>This content will be injected into the default slot.</p>

    <template v-slot:footer>
      <footer>Footer content</footer>
    </template>
  </ChildComponent>
</template>
```
In this example, the ChildComponent defines three slots: a named slot with the name "header", a default slot, and another named slot with the name "footer". The parent component then uses the v-slot directive to pass content to the respective slots.

