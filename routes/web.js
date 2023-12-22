const express =require("express")
const router = express.Router()
const clientController = require("../controller/ClientController")


router.get('/client', clientController.clientpage);
router.post('/clientinsert', clientController.clientinsert);
router.get('/clientview/:id', clientController.clientview);
router.get('/clientdelete/:id', clientController.clientdelete);
router.post('/clientupdate/:id', clientController.clientupdate);
router.get('/clientedit/:id', clientController.clientedit);
// router.get('/clienteDisplay', clientController.clientdisplay);


module.exports =router