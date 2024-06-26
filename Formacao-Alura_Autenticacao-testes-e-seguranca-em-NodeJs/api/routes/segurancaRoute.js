const {Router} = require('express');
const SegurancaController = require('../controllers/segurancaController');

const router = Router();

router.post('/seguranca/acl', SegurancaController.cadastrarAcl);
router.post('/seguranca/permissoes_roles', SegurancaController.cadastrarPermissoesRoles);


module.exports = router;