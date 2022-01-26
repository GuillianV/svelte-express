<h1>

    Projet Svelte - express
</h1>

<h2>
    Commandes :

</h2>

<p>

Create project :<br> <code>$ npx degit sveltejs/template svelte-express-app</code><br>

Setup project :<br> <code>$ cd svelte-express-app <br>
$ yarn<br>
$ yarn dev</code>

Add Back server : <br><code>$ yarn add express --save
<br>$ yarn add cors --save </code>

Setup Server : 

<code> 
const express = require('express');<br>
const app = express();<br>
const port = process.env.PORT || 5000;<br>
const cors = require('cors');<br>
const path = require('path');<br>
app.use(cors());<br>
app.use(express.static('public'));<br>
app.get('*', (req, res) => {<br>
   res.sendFile(path.resolve(__dirname, 'public', 'index.html'));<br>
});<br>
app.listen(port, () => {<br>
   console.log(`Server is up at port ${port}`);<br>
});<br>
</code>

Start server : 

<code>$ node server.js</code>

</p>

Dont forget to build svelte before launch serve

<p>

<h3>
Full tutorial :
</h3>
<a target="_blank" href="https://medium.com/swlh/full-stack-development-starter-svelte-and-express-831aefee41c0">tutorial</a>

</p>