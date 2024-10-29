import User from '#models/user'
import { UserValidator } from '#validators/user'
import type { HttpContext } from '@adonisjs/core/http'

export default class SignsController {
  async signin({ response, request }: HttpContext) {
    const email = request.input('email')
    const user = await User.findBy('email', email)

    if (!user) {
      return response.status(404).send('Usuário não encontrado/inexistente')
    }
    const token = await User.accessTokens.create(user)

    return { user, token }
  }

  async signup({ request, response }: HttpContext) {
    const body = request.body()
    const payload = await UserValidator.validate(body)
    if (!payload) {
      return response.status(401).send('Você deve enviar informações válidas')
    }
    const user = await User.create(payload)

    return { user }
  }
}
