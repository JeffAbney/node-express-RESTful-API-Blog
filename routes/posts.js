module.exports = {
  
  getPost: function (stuff, store) {
  	stuff.get('/posts', (req, res) => {
  	  console.log("Getting Posts", store.posts)
	  res.send(store.posts)
})

  },
  addPost(req, res) {

  },
  updatePost(req, res) {

  },
  removePost(req, res) {

  }
}

