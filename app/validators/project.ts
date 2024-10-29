import vine from '@vinejs/vine'

export const ProjectValidator = vine.compile(
  vine.object({
    title: vine.string().minLength(2),
    url: vine.file({
      size: '20mb',
      extnames: ['jpg', 'png'],
    }),
    description: vine.string().minLength(2),
  })
)
