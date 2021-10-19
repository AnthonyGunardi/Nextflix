const List = require("../models/list")

class ListController {
  static async create (req, res, next) {
    const newList = new List(req.body)
    try {
      const savedList = await newList.save()
      res.status(201).json(savedList)
    } catch (err) {
      next(err)
    }
  }

  static async update (req, res, next) {
    try {
      const updatedList = await List.findByIdAndUpdate(
        req.params.id, { $set: req.body },
        { new: true }
      )
      res.status(200).json(updatedList)
    } catch (err) {
      next(err)
    }
  }

  static async delete (req, res, next) {
    try {
      await List.findByIdAndDelete(req.params.id)
      res.status(201).json({ message: "The list has been deleted" })
    } catch (err) {
      next(err)
    }
  }

  static async getListByType (req, res, next) {
    const typeQuery = req.query.type
    const genreQuery = req.query.genre
    let list = []
    try {
      if (typeQuery) {
        if (genreQuery) {
          list = await List.aggregate([
            { $sample: { size: 10 } },
            { $match: { type: typeQuery, genre: genreQuery } },
          ])
        } else {
          list = await List.aggregate([
            { $sample: { size: 10 } },
            { $match: { type: typeQuery } },
          ])
        }
      } else {
        list = await List.aggregate([{ $sample: { size: 10 } }])
      }
      res.status(200).json(list)
    } catch (err) {
      next(err)
    }
  }
}

module.exports = ListController