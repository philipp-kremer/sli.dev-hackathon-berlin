---
layout: two-cols
background: '#001b41'
class: flex flex-col h-full justify-center
---
<div class="grid grid-cols-1 divide-y divide-accent-1 text-background-gray">
  <div class="text-3xl pb-4">
  Agenda
  </div>
  <ul class="pt-4">
    <li class="flex pb-2">Idea</li>
    <li class="flex pb-2">Sourcecode</li>
    <li class="flex pb-2">Live demo</li>
  </ul>
</div>

::right::

<img class="p-16 rounded-full"
  src="https://github.com/philipp-kremer.png"
/>

<div class="absolute left-780px top-120px " >
  <div class="flex rounded-full bg-accent-3 font-serif p-4 w-20 h-20 justify-center">
    <span class="self-center">
    Say you<br> 
    to me!
    </span>
  </div>
</div>


<IonosLogo left="true" />

<Footer class="text-background-gray"
  title="Copyright © 1&1 IONOS SE 2021"
  :social="[
    { type: 'gh', username: 'ionos-deploy-now' }
  ]"
/>

<!--
Icons https://icones.js.org/
-->