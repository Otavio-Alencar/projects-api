import Project from '#models/project'
import { ProjectValidator } from '#validators/project'
import type { HttpContext } from '@adonisjs/core/http'

export default class ProjectsController {
  async sendProject({ request, response }: HttpContext) {
    const body = request.body()
    const payload = ProjectValidator.validate(body)
    if (!payload) {
      return response.status(400).send('Projeto inválido')
    }
    const project = await Project.create(body)

    return { project }
  }
}
