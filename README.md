# ikamo.cc

This is a personal portfolio project compiling all my front-end projects (including this one). The goal is to practice Vite with Vue and Three JS.

## Vue Takeaways

- If you're using Vue Router, scrolling interaction can only be modified on the app.vue file, so smooth scrolling and scrollIntoView() must be planned to be set up on the app.vue.
- Next time, when setting up a project, figure out a design system to better organize the CSS classes and styling.
- If there's only one font in use, you can set the font family on the html selector in CSS to apply it to all the type styles in the future.
- The template wrapping the div format is essential for any vue components for views as it affects how the library reads each file for things like transition, etc.
- Any constant updating interaction (custom cursor, smooth scrolling, etc.) must be added on the Mounted or onMounted hook for the components and pages.
- The setup added on the script tag is a way for Vue 3 to get around the traditional format, making writing JavaScript much faster and easier.
- Overlapping text is rough to code for responsive; only add to the design if it fits the brief.
- Understanding the Vue components life cycle hook is crucial for any development work in Vue.
- Data binding for components can speed up the coding process and avoid repeated code.

## Three.js Takaways

-  Before loading in the models, make sure to orient each model to the origin and facing the y-axis correctly in Blender. You'll have an easier time when transforming in code.
- If the polygon on your model is simple and you do not need high quality shadows, you can consider directly exporting the model with materials to use dynamic lighting in Three.js. However, if it's a big model or scene, see if you can bake the texture and export it to apply with code.
- To render separate section in different div, use the setScissors() function and reference the different div to render.
- When using setScissors(), you can blend it with direct render in canvas. To solve that, just create a div that take up the whole viewport just like the canvus and reference that div.
- Code can start to become very messy as the scene becomes more complicated.
- **I really need to practice how to use JS modules and class to clean my code.**