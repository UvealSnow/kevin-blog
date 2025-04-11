import fetch, { HeadersInit } from 'node-fetch'

const headers = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
} satisfies HeadersInit


export async function fetchGraphQL<T>(endpoint: string, query: string): Promise<T> {
  const response = await fetch(endpoint, {
    method: 'GET',
    headers,
    body: JSON.stringify({
      query,
    }),
  })

  return await response.json() as T
}

export async function fetchREST<T>(endpoint: string, query: Record<string, any>): Promise<T> {
  const URL = `${endpoint}?${new URLSearchParams(query).toString()}`
  const response = await fetch(URL, {
    method: 'GET',
    headers,
  })

  return await response.json() as T
}
