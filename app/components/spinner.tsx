export default function Spinner({
  color = 'border-blue-500',
}: {
  color?: string
}) {
  return (
    <div className="my-16 flex justify-center">
      <div
        className={`h-10 w-10 border-4 rounded-full animate-spin ${color} border-t-transparent`}
      ></div>
    </div>
  )
}
