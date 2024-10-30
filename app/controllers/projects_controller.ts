import Project from '#models/project'
import { ProjectValidator } from '#validators/project'
import type { HttpContext } from '@adonisjs/core/http'
import app from '@adonisjs/core/services/app'

export default class ProjectsController {
  async sendProject({ request, response }: HttpContext) {
    const url = request.file('url')
    const title = request.input('title')
    const description = request.input('description')

    const body = { title, url, description }
    const payload = await ProjectValidator.validate(body)

    if (!payload) {
      return response.status(401).send('arquivos enviados são inválidos')
    }

    if (!body.url) {
      return response.status(401).send('Arquivo "url" não encontrado')
    }

    const project = await Project.create({
      url: body.url,
      title: body.title,
      description: body.description,
    })

    // await url.move(app.makePath('storage/uploads'))

    return { project }
  }

  async getProject() {
    const projects = await Project.all()

    return projects
  }
}
