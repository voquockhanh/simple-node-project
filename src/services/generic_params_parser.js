const paramToGeneric = (fieldInfo, value) => {
  const [type, property, operator] = fieldInfo.split("_");

  const genericParam = {
    type: type === "f" ? "filter" : type === "s" ? "sort" : null,
    property: property,
    operator: operator ? operator : "is",
    value: value,
  };

  return genericParam;
};

const parseGenericParams = (params) => {
  let genericParams = [];

  for (const [key, value] of Object.entries(params)) {
    if (key.startsWith("f_") || key.startsWith("s_")) {
      genericParams.push(paramToGeneric(key, value));
    }
  }

  return genericParams;
};

export { parseGenericParams };
