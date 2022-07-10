export function toProductModel(reqBody) {
    return {
      name: reqBody.name,
      price: reqBody.price,
      discount: reqBody.discount,
      description: reqBody.description,
      rating: reqBody.rating,
      images: reqBody.images,
      category_id: reqBody.category_id,
    }
  }