import * as Models from "../models/index.js"
import logger from "../libs/logger.js"
import sequelize from '../db_init.js';

const getAverageRatings = async (product_ids) => {

  if (!product_ids.length) {
    throw new Error("product_ids not found!")
  }

  let result = false

  try {
    const averageRatingsquery = `SELECT product_id, AVG(rating) AS rating FROM comments WHERE product_id IN (:ids) GROUP BY product_id`
    result = await sequelize.query(averageRatingsquery,
      {
        logging: console.log,
        plain: false, // If plain is true, sequelize will only return the first record of the result set
        raw: true,
        replacements: { ids: product_ids },
        type: sequelize.QueryTypes.SELECT
      }
    )

    /*
    result = await Models.Comment.findAll({
      attributes: ['product_id', 'rating', [sequelize.fn('AVG', sequelize.col('rating')), 'rating']],
      group: 'product_id',
      where: {
        product_id: product_ids
      }
    });
    */
  } catch (error) {
    logger.error(error.stack)
    throw new Error("Get average Ratings failed, please try again with err:" + error.message)
  }

  if (!result) {
    throw new Error("Get average Ratings failed, please try again")
  }

  return result;
};

export { getAverageRatings }
