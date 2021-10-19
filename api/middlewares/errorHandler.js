function errorHandler (err, req, res, next) {
  if (err.errors) {
    if (err.errors.title.message ==  "Path `username` is required.") {
      res.status(400).json({ message: 'Username is required!'})
    }
    else if (err.errors.title.message ==  "Path `email` is required.") {
      res.status(400).json({ message: 'Email is required!'})
    }
    else if (err.errors.title.message ==  "Path `password` is required.") {
      res.status(400).json({ message: 'Password is required!'})
    }
    else if (err.errors.title.message ==  "Path `title` is required.") {
      res.status(400).json({ message: 'Title is required!'})
    }
    else if (err.errors.title.message ==  "Path `desc` is required.") {
      res.status(400).json({ message: 'Description is required!'})
    }
    else if (err.errors.title.message ==  "Path `img` is required.") {
      res.status(400).json({ message: 'Image is required!'})
    }
  }
  else {
    if (err.keyPattern) {
      if (err.keyPattern.username) {
        res.status(400).json({ message: 'Username must be unique!'})
      }
      else if (err.keyPattern.email) {
        res.status(400).json({ message: 'Email must be unique!'})
      }
      else if (err.keyPattern.title) {
        res.status(400).json({ message: 'Title must be unique!'})
      }
    } else {
      res.status(500).json({ message: 'Internal server error'})
      }
  }
}

module.exports = errorHandler