module.exports = {
  
  getPost: function(app, store) {
  	app.get('/posts', (req, res) => {
  	  console.log("Getting Posts ", store.posts)
	  res.send(store.posts)
    })
  },
  addPost: function(app, store) {
  	app.post('/posts', (req, res) => {
  	  store.posts.push(req.body)
  	  console.log("Adding post ", store.posts)
  	  res.sendStatus(201)
    })
  },
  updatePost: function(app, store) {
  	app.put('/posts/:postId', (req, res) => {
  	  Object.assign(store.posts[req.params.postId], req.body)
  	  console.log("Updating post", store.posts[req.params.postId])
      res.sendStatus(204)
    })
  },
  removePost: function(app, store) {
  	app.delete('/posts/:postID', (req, res) => {
      store.posts.splice(req.params.postId, 1)
      console.log("Deleting Post", store.posts)
      res.sendStatus(204)
    })
  }  
}

