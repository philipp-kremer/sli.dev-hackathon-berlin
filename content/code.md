---
layout: default
background: '#001b41'
class: text-background-gray
---

<h1 class="text-center"> Sourcecode </h1>

```js
const { exec } = require('child_process');

exports.runPlaywright = async (event, context, callback) => {
    await exec('npx playwright test', async function (err, data) {
        if (err) {
            console.error(
                "Unable to run following Tests. Error JSON:",
                JSON.parse(JSON.stringify(err, null, 2))
            );
        } else {
            console.log(JSON.stringify(data, null, 2));
        }
    });
}
```

<div class="pt-16 flex text-accent-1 justify center">
    <a href="https://github.com/ionos-deploy-now/testing-on-faas" target="_blank"> -> Now to GitHub</a>
</div>

<Footer
  rotate="true"
  title="Copyright © 1&1 IONOS SE 2021"
  :social="[
    { type: 'gh', username: 'ionos-deploy-now' }
  ]"
/>

