const Tool = require('../models/Tool.model.js');

async function createTool(options) {
  const tool = new Tool(
    options.image,
    options.name,
    options.brand,
    options.total,
    options.available,
    options.price,
    options.status
  );

  try {
    userResult = await tool.create();
  } catch (error) {
    if (error.statusCode) throw error;
    console.log(error);
    throw {
      ok: false,
      statusCode: 500,
      data: 'Ocurrió un error al crear el herramienta'
    };
  }

  return {
    message: 'Herramienta creado exitosamente',
  };
}

async function viewTools() {
  const tool = new Tool();
  let userResult;
  
  try {
    userResult = await tool.list();
  } catch (error) {
    if (error.statusCode) throw error;
    console.log(error);
    throw {
      ok: false,
      statusCode: 500,
      data: 'Ocurrió un error al obtener las herramientas'
    };
  }

  return  userResult;
}

async function updateTool(options) {
  const tool = new Tool(
    options.image, 
    options.name, 
    options.brand, 
    options.total, 
    options.available, 
    options.price, 
    options.status 
  );

  try {
    userResult = await tool.update(options.id);
  } catch (error) {
    if (error.statusCode) throw error;
    console.log(error);
    throw {
      ok: false,
      statusCode: 500,
      data: 'Ocurrió un error al actualizar la herramienta'
    };
  }

  return {
    message: 'Herramienta actualizada exitosamente',
  };
}

async function deleteTool(options) {
  const tool = new Tool();

  try {
    userResult = await tool.delete(options.id);
  } catch (error) {
    if (error.statusCode) throw error;
    console.log(error);
    throw {
      ok: false,
      statusCode: 500,
      data: 'Ocurrió un error al eliminar la herramienta'
    };
  }

  return {
    message: 'Herramienta eliminada exitosamente',
  };
}

module.exports = {
  createTool,
  viewTools,
  updateTool,
  deleteTool
};
