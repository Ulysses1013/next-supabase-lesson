'use client'

export default function Error({ error }: { error: Error }) {
  return (
    <div>
      <p className="text-red-500 mt-6 text-center">{error.message}</p>
    </div>
  )
}
