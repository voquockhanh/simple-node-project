import { Sequelize } from 'sequelize'
const Op = Sequelize.Op

const equal = (fields, value) => {
  const _fields = fields.split('.')

  if (_fields.length === 1) {
    const [field] = _fields

    return {
      [field]: value
    }
  }

  if (_fields.length === 2) {
    const [parent, child] = _fields

    return {
      [parent]: {
        [child] : value 
      }
    }
  }

  return null
}

const contain = (fields, value) => {
  const _fields = fields.split('.')

  if (_fields.length === 1) {
    const [field] = _fields

    return {
      [field]: {
        [Op.like]: "%" + value + "%"
      }
    }
  }

  if (_fields.length === 2) {
    const [parent, child] = _fields

    return {
      [parent]: {
        [child] : {
          [Op.like]: "%" + value + "%"
        }
      }
    }
  }

  return null
}

const gte = (field, value) => {
  return {
    [field]: {
      [Op.gte]: value
    }
  }
}

const lte = (field, value) => {
  return {
    [field]: {
      [Op.lte]: value
    }
  }
}

const and = (conditions) => {
  return {
    [Op.and]: conditions
  }
}

const or = (conditions) => {
  return {
    [Op.or]: conditions
  }
}

export { equal, contain, gte, lte, and, or }