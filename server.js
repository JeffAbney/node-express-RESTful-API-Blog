const express = require('express')
const logger = require('morgan')
const errorhandler = require('errorhandler')
const bodyParser = require('body-parser')
const posts = require('./routes/posts')
const comments = require('./routes/comments')

let app = express()

app.use(bodyParser.json())
app.use(logger('dev'))
app.use(errorhandler())


let store = {
  posts: [
    {name: 'Top 10 ES6 Features every Web Developer must know',
    url: 'https://webapplog.com/es6',
    text: 'This essay will give you a quick introduction to ES6. If you don’t know what is ES6, it’s a new JavaScript implementation.',
    comments: [{
      text: 'Cruel…..var { house, mouse} = No type optimization at all',
      text: 'I think you’re undervaluing the benefit of ‘let’ and ‘const’.',
      text: '(p1,p2)=>{ … } ,i understand this ,thank you !'      
    }]
    }
  ]
}

posts.getPost(app, store)
posts.addPost(app, store)
posts.updatePost(app, store)
posts.removePost(app, store)



app.listen(3000)