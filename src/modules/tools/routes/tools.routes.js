const Router = require('express');

// API middlewares
const { createToolAPI, viewToolsAPI, updateToolAPI, deleteToolAPI} = require('../api/tools.api.js');

// Inicializar router
const router = Router();

// Rutas post
router.post('/tool/createTool', createToolAPI);

// Rutas get
router.get('/tool/viewTools', viewToolsAPI);

// Rutas put
router.put('/tool/updateTool', updateToolAPI);

// Rutas delete
router.delete('/tool/deleteTool', deleteToolAPI);

module.exports = router;
