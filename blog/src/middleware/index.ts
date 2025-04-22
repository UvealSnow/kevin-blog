import { middleware } from 'astro:i18n'
import { defineMiddleware, sequence } from 'astro:middleware'

export const userMiddleware = defineMiddleware(async (ctx, next) => {
	console.log(ctx.params, ctx.currentLocale)
	return next()
})

export const onRequest = sequence(
	userMiddleware,
	middleware({
		redirectToDefaultLocale: false,
		prefixDefaultLocale: true,
		fallbackType: 'redirect',
	}),
)
