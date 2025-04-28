export interface PostTranslation {
	id: number
	pages_id: string
	languages_code: string
	name: string
	slug: string
	description: string
	thumbnail: string
	content: string
}

export interface PostAuthor {
	first_name: string
	last_name: string
	email: string
	location?: string | null
	title?: string | null
	description?: string | null
	avatar?: string | null
}

export interface PostInterface {
	id: string
	date_created: string
	translations: PostTranslation[]
	author: PostAuthor
}
