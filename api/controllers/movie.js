const Movie = require("../models/movie")

class MovieController {
  static async findAll (req, res, next) {
    try {
      const movies = await Movie.find()
      res.status(200).json(movies.reverse())
    } catch (err) {
      next(err)
    }
  }

  static async findById (req, res, next) {
    try {
      const movie = await Movie.findById(req.params.id)
      res.status(200).json(movie)
    } catch (err) {
      next(err)
    }
  }

  static async getRandom (req, res, next) {
    const type = req.query.type
    let movie
    try {
      if (type === "series") {
        movie = await Movie.aggregate([
          { $match: { isSeries: true } },
          { $sample: { size: 1 } },
        ])
      } else {
        movie = await Movie.aggregate([
          { $match: { isSeries: false } },
          { $sample: { size: 1 } },
        ])
      }
      res.status(200).json(movie)
    } catch (err) {
      next(err)
    }
  }

  static async create (req, res, next) {
    const newMovie = new Movie(req.body)
    try {
      const savedMovie = await newMovie.save()
      res.status(201).json(savedMovie)
    } catch (err) {
      next(err)
    }
  }

  static async update (req, res, next) {
    try {
      const updatedMovie = await Movie.findByIdAndUpdate(
        req.params.id, { $set: req.body }, { new: true }
      )
      res.status(200).json(updatedMovie)
    } catch (err) {
      next(err)
    }
  }

  static async delete (req, res, next) {
    try {
      await Movie.findByIdAndDelete(req.params.id)
      res.status(200).json({ message: "The movie has been deleted" })
    } catch (err) {
      next(err)
    }
  }
}

module.exports = MovieController