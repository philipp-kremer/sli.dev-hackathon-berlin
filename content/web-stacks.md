---
layout: two-cols
class: flex flex-col h-full justify-center
preload: false
---

# 30 years with a great variety of technologies

Over the years web technologies accelerates. A great variety of technologies was built up. Some of them are well known, but probably the most of them hardly nobody remembers.

Nowadays the boundaries between web and desktop are fluid.

Fostered by a wide range of web technologies the possibilies are nearly endless. Even it's possible to build a site from scratch with Html, JS and CSS most modern sites rely on any web framework or CMS.

::right::

<div class="flex flex-col h-full justify-center p-4 text-blue-900">
  <div class="absolute top-0 text-6xl font-bold"
    v-motion
    :initial="{ x: -1000, y:0, opacity: 0, scale: 2, rotate: 100 }"
    :enter="{ x: 30, y: 100, opacity: 0.8, scale: 1, rotate: 0, transition: { delay: 500, duration: 1000 } }"
    >
    HTML, JS, CSS
  </div>
  <div class="absolute top-0 text-5xl font-bold"
    v-motion
    :initial="{ x: 1000, y:1000, opacity: 0, scale: 2, rotate: 100 }"
    :enter="{ x: 200, y: 220, opacity: 0.8, scale: 1, rotate: 0, transition: { delay: 500, duration: 1000 } }"
    >
    LAMP
  </div>
  <div class="absolute top-0 text-4xl font-bold"
    v-motion
    :initial="{ x: 100, y:-100, opacity: 0, scale: 2, rotate: 100 }"
    :enter="{ x: 300, y: 320, opacity: 0.8, scale: 1, rotate: 0, transition: { delay: 500, duration: 1000 } }"
    >
    MEAN
  </div>
  <div class="absolute top-0 text-3xl font-bold"
    v-motion
    :initial="{ x: 500, y:-100, opacity: 0, scale: 2, rotate: 100 }"
    :enter="{ x: 50, y: 360, opacity: 0.8, scale: 1, rotate: 0, transition: { delay: 500, duration: 1000 } }"
    >
    WAMP
  </div>
  <div class="absolute top-0 text-2xl font-bold"
    v-motion
    :initial="{ x: 0, y:1000, opacity: 0, scale: 2, rotate: 100 }"
    :enter="{ x: 50, y: 440, opacity: 0.8, scale: 1, rotate: 0, transition: { delay: 500, duration: 1000 } }"
    >
    ... and many others ...
  </div>
</div>

<Footer
  title="IONOS SE"
  :social="[
    { type: 'gh', username: 'ionos-deploy-now' }
  ]"
/>

<!--
-->