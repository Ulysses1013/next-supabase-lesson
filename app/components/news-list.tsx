import { Database } from '@/database.types'
import Counter from './counter'

type News = Database['public']['Tables']['news']['Row']

async function fetchNews() {
  await new Promise((resolve) => setTimeout(resolve, 2000))
  const res = await fetch(`${process.env.url}/rest/v1/news?select=*`, {
    headers: new Headers({
      apikey: process.env.apikey as string,
    }),
  })
  if (!res.ok) {
    throw new Error(res.statusText)
  }
  const news: News[] = await res.json()
  return news
}

export default async function NewsList() {
  const news = await fetchNews()
  return (
    <div className="m-1 border border-bg-blue-500 p-4">
      <Counter />
      <p className="my-4 pb-3 text-xl font-medium underline underline-offset-4">
        News
      </p>
      <ul className="m-3">
        {news.map((n) => (
          <li key={n.id}>
            <p>{n.title}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
