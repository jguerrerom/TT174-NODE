/** llamar el modelo */
const Book = require("../models/books.model");

/**Que muestra todos los registro de la base de datos */
const index = async (req, res) => {
  try {
    /**BUSCAR TODOS LOS REGISTROS */

    const books = await Book.findAll({});

    return res.status(201).json({
      status: true,
      message: "Listado de libros de forma correcta",
      data: books,
    });
  } catch (error) {
    console.error(`Sucedió un error al listar los libros: ${error}`);
    return res.status(500).json({
      status: true,
      message: `Sucedió un error al listar los libros: ${error}`,
    });
  }
};

/**Crear un nuevo registro */
const create = async (req, res) => {
  try {
    //validar si ya existe un libro con el mismo código
    const { code } = req.body;

    const bookExist = await Book.findOne({
      where: { code },
    });

    console.log(bookExist);
    /**Validar si existe un libro con el mismo código */
    if (!bookExist) {
      /**CRear el registro */
      const bookCreate = await Book.create(req.body, {});

      return res.status(201).json({
        status: true,
        message: "Libro creado de forma correcta",
      });
    } else {
      return res.status(409).json({
        status: false,
        message: `Libro ya existe con el mismo código: ${code}`,
      });
    }
  } catch (error) {
    console.error(`Sucedió un error al crear el libro: ${error}`);
    return res.status(500).json({
      status: false,
      message: `Sucedió un error al crear el libro: ${error}`,
    });
  }
};

/**MOstrar un resgistro en especifico */
const show = async (req, res) => {
  try {
    /**Realizar la busqueda del libro por su id */
    const { id } = req.params;
    const bookExist = await Book.findByPk(id, {});

    if (bookExist) {
      return res.status(201).json({
        status: true,
        message: "Libro consultado de forma correcta",
        data: bookExist,
      });
    } else {
      return res.status(201).json({
        status: false,
        message: `Libro consultado con el id: ${id} no existe`,
        data: null,
      });
    }
  } catch (error) {
    console.error(`Sucedió un error al consultar el libro: ${error}`);
    return res.status(500).json({
      status: false,
      message: `Sucedió un error al consultar el libro: ${error}`,
    });
  }
};

/**Actualizar un registro especifico */
const update = async (req, res) => {
  return res.status(201).json({
    status: true,
    message: "Libro actualizado de forma correcta",
  });
};

/**Eliminar un registro especifico */
const destroy = async (req, res) => {
  return res.status(201).json({
    status: true,
    message: "Libro eliminado de forma correcta",
  });
};

/**
 * Exporta todas las funciones del controlador para su uso en las rutas.
 *
 * @type {object}
 */
module.exports = {
  index,
  create,
  update,
  show,
  destroy,
};
