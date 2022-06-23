---
layout: default
background: '#3b9cda'
class: flex flex-col h-full justify-center text-background-gray 
preload: false
---

<div class="flex justify-center pb-8 text-6xl">
  <div class=" font-bold">JAM</div>
  <div>Stack</div>
</div>

<div class="flex justify-center items-center pb-4">
<div class="w-24 h-24 rounded-full text-3xl flex items-center text-white bg-accent-5">
  <div class="text-center flex-grow text-4xl font-bold">JS</div>
</div>
<mdi:plus-thick class="fill-current w-16 h-16"/>
<div class="w-24 h-24 rounded-full text-3xl flex items-center text-white bg-accent-4">
  <div class="text-center flex-grow text-4xl font-bold">API</div>
</div>
<mdi:plus-thick class="fill-current w-16 h-16"/>
<div class="w-24 h-24 rounded-full text-3xl flex items-center text-white bg-accent-3">
  <div class="flex-grow  font-bold">
    <div class="flex justify-center items-center">
      <span class="text-4xl">M</span>
      <mdi:arrow-down-bold class="fill-current text-sm"/>
    </div>
  </div> 
</div>
</div>

<div class="flex flex-col items-center">
  <div class="text-4xl pt-4 pb-4">3 crucial architectural principles</div>
  <ul class="list-disc">
    <li>Rendering at built time and not at runtime</li>
    <li>Decoupling of concerns</li>
    <li>Technology agnostic</li>
  </ul>
</div>

<Footer
  title="Copyright © 1&1 IONOS SE 2021"
  :social="[
    { type: 'gh', username: 'ionos-deploy-now' }
  ]"
/>

<IonosLogo left="false" />

<!--
-->
