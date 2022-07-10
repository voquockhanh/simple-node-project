const dispatch = (controllerClass, action) => {
  return (req, res, next) => {
    const controller = new controllerClass(req, res, next)
    if (!controller[action]) {
      throw new Error(`No handler found for this action ${controllerClass}.${action}`)
    }
    controller[action]()
  }
}

export default dispatch