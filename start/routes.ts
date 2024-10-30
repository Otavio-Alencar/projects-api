/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

const SignsController = () => import('#controllers/signs_controller')
const ProjectsController = () => import('#controllers/projects_controller')
import router from '@adonisjs/core/services/router'
import { middleware } from './kernel.js'

router.post('/signin', [SignsController, 'signin'])
router.post('/signup', [SignsController, 'signup'])
router.post('/project', [ProjectsController, 'sendProject']).use(
  middleware.auth({
    guards: ['api'],
  })
)
router.get('/project', [ProjectsController, 'getProject']).use(
  middleware.auth({
    guards: ['api'],
  })
)
