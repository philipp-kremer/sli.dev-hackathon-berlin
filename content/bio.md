---
layout: two-cols
background: '#001b41'
class: flex flex-col h-full justify-center
---
<div class="grid grid-cols-1 divide-y divide-accent-1 text-background-gray">
  <div class="text-3xl pb-4">
  Alexander
  Gängel
  </div>
  <div class="pt-4">
    <div class="flex pb-2"><mdi-account-circle class="fill-current text-accent-1 mr-2"/>Senior Software Developer @ IONOS</div>
    <div class="flex pb-2"><mdi-google-maps class="fill-current text-accent-1 mr-2"/>Schriesheim bei Heidelberg</div>
    <div class="flex pb-2"><mdi-heart class="fill-current text-accent-1 mr-2"/>Guitar, PC-Gaming and Web Technologies</div>
    <div class="flex pb-2"><mdi-github class="fill-current text-accent-1 mr-2"/><a href="https://github.com/agaengel" target="_blank">agaengel</a></div>
  </div>
</div>

::right::

<img class="p-16 rounded-full"
  src="/avatar.png"
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
