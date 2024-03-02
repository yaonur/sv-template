// src/routes/+layout.server.ts
export const load = async ({ locals: { getSession } }) => {
	let session = await getSession()
	return {
		session
	}
  }