export interface PageTranslation {
	languages_code: string
	name: string
	slug: string
	description: string
	thumbnail: string
}

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
	date_created: string
	translations: PostTranslation[]
	user_created: PostAuthor
}

export interface NavbarLinkInterface {
	translations: {
		name: string
		slug: string
		languages_code: string
	}[]
}

export interface Translation {
	translations: {
		slug: string
		languages_code: string
	}[]
}
