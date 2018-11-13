module.exports = {

  getComments: function(app, store) {
    app.get('/posts/:postId/comments', (req, res) => {
      if (req.params.postId >= store.posts.length) {
      	res.sendStatus(404)
      }
      console.log("Getting comments", store.posts[req.params.postId].comments)
      res.send(store.posts[req.params.postId].comments)
    })
  }, 
  addComment: function(app,store) {
    app.post('/posts/:postId/comments', (req, res) => {
      if (req.params.postId >= store.posts.length) {
        res.sendStatus(404)
      }
      store.posts[req.params.postId].comments.push(req.body)
      console.log("Writing comment", store.posts[req.params.postId].comments)
      res.sendStatus(201)
    })
  },
  updateComment: function(app, store) {
    app.put('/posts/:postId/comments/:commentId', (req, res) => {
      if (
        req.params.postId >= store.posts.length
        ||
        req.params.commentId >= store.posts[req.params.postId].comments.length
      ) {
          res.sendStatus(404)
      }
      let newComment = store.posts[req.params.postId].comments[req.params.commentId]
      Object.assign
        (newComment, req.body)
      console.log("Updating post", store.posts[req.params.postId].comments)
      res.sendStatus(204)
    })
  },

  removeComment: function(app, store) {
  	app.delete('/posts/:postId/comments/:commentId', (req, res) => {
  	  if (
        req.params.postId >= store.posts.length
        ||
        req.params.commentId >= store.posts[req.params.postId].comments.length
      ) {
          res.sendStatus(404)
        }
      store.posts[req.params.postId].comments.splice(req.params.commentId, 1)
      console.log("Deleting comment", store.posts[req.params.postId].comments)
      res.sendStatus(204)
  	})
  }
}