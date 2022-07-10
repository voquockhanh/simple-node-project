import * as Models from '../models/index.js'
import dispatch from './dispatcher.js'
import { equal, contain, gte, lte, and } from '../models/sql_conditions.js';
import { getAverageRatings } from '../services/ratings.js'
import { parseGenericParams } from '../services/generic_params_parser.js';

class ProductController {
  constructor (req, res, next) {
    this.req = req
    this.res = res
    this.next = next
  }

  static handle (action) {
    return dispatch(ProductController, action)
  }

  async getAll () {
    try {
      // const products = await Models.Product.findAll()
      // this.res.send(products)

      const { genericParams, offset, limit } = getQueryParams(this.req.query)

      let filterConditions = []
      let sortConditions = []

      genericParams.forEach(param => {
        if (param['property'] === 'category'
            && param['type'] === 'filter'
            && param['operator'] === 'is') {
          filterConditions.push(equal('category_id', parseInt(param['value'])))
          return
        }

        if (param['property'] === 'name'
            && param['type'] === 'filter'
            && param['operator'] === 'like') {
          filterConditions.push(contain('name', param['value']))
          return
        }

        if (param['property'] === 'year'
            && param['type'] === 'filter'
            && param['operator'] === 'is') {
          filterConditions.push(equal('description.year', parseInt(param['value'])))
          return
        }

        if (param['property'] === 'price'
            && param['type'] === 'filter'
            && param['operator'] === 'gte') {
          filterConditions.push(gte('price', parseInt(param['value'])))
          return
        }

        if (param['property'] === 'price'
            && param['type'] === 'filter'
            && param['operator'] === 'lte') {
          filterConditions.push(lte('price', parseInt(param['value'])))
          return
        }

        if (param['type'] === 'sort'
            && (param['value'] === 'asc' || param['value'] === 'desc')) {
          sortConditions.push([param['property'], param['value']])
          return
        }
      })

      const products = await Models.Product.findAll({
        where: and(filterConditions),
        order: sortConditions,
        offset: offset,
        limit: limit
      })

      let ratings = []
      if (products.length) {
        const product_ids = products.map(product => product.id)
        ratings = await getAverageRatings(product_ids)
      }      

      this.res.send({
        products,
        ratings
      })
    } catch (err) {
      this.next(err)
    }
  }

  async create () {
    try {
      const newProduct = {
        name: this.req.body.name,
        price: this.req.body.price,
        discount: this.req.body.discount,
        description: this.req.body.description,
        rating: this.req.body.rating,
        images: this.req.body.images,
        category_id: this.req.body.category_id,
      }

      await Models.Product.create(newProduct)

      this.res.send("ok")
    } catch (err) {
      this.next(err)
    }
  }

  async find () {}
  async update () {}
  async delete () {}
}

async function queryByCategory(id) {
  const products = await Models.Product.findAll({
    where: {
      category_id: id
    }
  })

  return products
}

function getQueryParams(query) {
  const { limit, page } = query;
  const _limit = limit ? parseInt(limit) : 20;

  const genericParams = parseGenericParams(query);

  const condition = {
    genericParams: genericParams,
    limit: _limit,
    offset: page ? (page - 1) * _limit : 0
  };

  return condition
}

export default ProductController