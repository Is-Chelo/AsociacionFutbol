//  funcion para validar si existe el id en la tabla especifica
const idExistsInTable = async (id = "", model) => {
  const idModel = await model.findOne({
    where: {
      id,
    },
  });
  if (!idModel) {
    throw new Error(`The id ${id} does not exist in the DB`);
  }
};

module.exports = {
  idExistsInTable,
};
