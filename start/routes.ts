/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

const SignsController = () => import('#controllers/signs_controller')
import router from '@adonisjs/core/services/router'

router.post('/signin', [SignsController, 'signin'])
router.post('/signup', [SignsController, 'signup'])
