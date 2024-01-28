# ikamo.cc

This is a personal portfolio project compiling all my front-end projects (including this one). The goal is to practice Vite with Vue and Three JS.

## Vue Takeaways

- If you're using Vue Router, scroll to interaction can only be modified on the app.vue file.
- If there's only one font in use, you can set the font family on the html selector in CSS to apply it to all the type styles in the future.
- The template wrapping the div format is essential for any vue components for views as it affects how the library reads each file for things like transition, etc.
- Any constant updating interaction (custom cursor, smooth scrolling, etc.) must be added on the Mounted or onMounted hook for the components and pages. On the other hand, if settings are different for each page, make sure to remove the settings in the onUnmount hook so it won't overlap settings on other pages.
- The setup added on the script tag allows Vue 3 to get around the traditional format, making writing JavaScript much faster and easier.
- Understanding the Vue components life cycle hook is crucial for any development work in Vue.
- Data binding for components can speed up the coding process and avoid repeated code.

## Three.js Takaways

-  Before you load in the models, please orient each model to the origin and face the y-axis correctly in Blender. You'll have an easier time when transforming in code.
- If the polygon on your model is simple and you do not need high quality shadows, you can consider directly exporting the model with materials to use dynamic lighting in Three.js. However, if it's a big model or scene, see if you can bake the texture and export it to apply with code.
- To render separate sections in different divs, use the setScissors() function and reference the different divs to render.
- When using setScissors(), you can't blend it with direct render on canvas. To solve that, create a div that takes up the whole viewport just like the canvas and references that div.
- Code can become very messy as the scene becomes more complicated.
- **I really need to practice using JS modules and classes to clean my code.**
