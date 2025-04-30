export const formatDate = (dateStr: string): string => {
	let date = new Date()
	try {
		date = new Date(dateStr)
	} catch (error) {
		console.error(error)
	} finally {
		return date.toLocaleString('en-GB', {
			day: '2-digit',
			month: '2-digit',
			year: 'numeric',
			hour: '2-digit',
			minute: '2-digit',
			hour12: true,
		})
	}
}
