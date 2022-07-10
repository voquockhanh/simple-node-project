import * as Models from '../models/index.js'
import dispatch from './dispatcher.js'
import { equal, or } from '../models/sql_conditions.js';

class CommentController {
  constructor (req, res, next) {
    this.req = req
    this.res = res
    this.next = next
  }

  static handle (action) {
    return dispatch(CommentController, action)
  }

  async getAll () {
    try {
      const { product: productId, user: userId } = this.req.query

      if (!productId || !userId) {
        return this.res.status(400).json({
          message: 'product (product_id) and user (user_id) must be supplied'
        })
      }

      let conditions = []

      if (productId)
        conditions.push(equal('product_id', parseInt(productId)))

      if (userId)
        conditions.push(equal('user_id', parseInt(userId)))
  
      const comments = await Models.Comment.findAll({
        where: or(conditions),
      })

      this.res.send(comments)
    } catch (err) {
      this.next(err)
    }
  }

  async create () {
    try {
      const newComment = {
        user_id: this.req.user.id,
        product_id: this.req.body.product_id,
        content: this.req.body.content,
        rating: this.req.body.rating,
      }

      await Models.Comment.create(newComment)

      this.res.send("ok")
    } catch (err) {
      this.next(err)
    }
  }

  async find () {}
  async update () {}
  async delete () {}
}

export default CommentController