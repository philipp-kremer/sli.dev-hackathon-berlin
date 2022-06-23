---
layout: default
background: '#3b9cda'
image: ./WWW-Project.png
class: flex flex-col content-start h-full text-background-gray
clicks: 3
---

<h1 class="text-left"> Architecture of the LAMP-Stack</h1>

<div class="flex items-center flex-col  text-center grow-0 content-center space-y-8 pt-5">
  <div class="rounded-xl bg-accent-5 p-4 text-background-ionos">CLIENT</div>
  <mdi:arrow-down-bold class="fill-current text-sm" v-click="1"/>
  <div class="rounded-xl bg-accent-3 p-4 text-background-ionos" v-click="1">WEBSERVER</div>
  <div class="flex ">
    <mdi:arrow-down-bold class="fill-current text-sm" v-click="3"/>
    <mdi:arrow-down-bold class="fill-current text-sm" v-click="2"/>
    <mdi:arrow-down-bold class="fill-current text-sm" v-click="3"/>
  </div>
  
  <div class="rounded-xl bg-background-ionos p-4" v-click="2">DATABASE</div>
</div>

<style>
h1  {
  font-size: 2em !important;
}
</style>

<Footer
  title="Copyright © 1&1 IONOS SE 2021"
  :social="[
    { type: 'gh', username: 'ionos-deploy-now' }
  ]"
/>

<IonosLogo left="false" />
<!--
* editors are using the client to gernate the content.
* developers focus on the webserver and database
-->
