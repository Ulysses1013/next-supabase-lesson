'use client'

import useStore from '@/store'
import supabase from '@/utils/supabase'
import { ArrowRightOnRectangleIcon } from '@heroicons/react/24/solid'
import { useRouter } from 'next/navigation'
import { FormEvent, useState } from 'react'

export default function Auth() {
  const { loginUser } = useStore()
  const [isLogin, setIsLogin] = useState(true)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (isLogin) {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      })
      setEmail('')
      setPassword('')

      if (error) {
        alert(error.message)
      } else {
        router.push('/auth/todo-crud')
      }
    } else {
      const { error } = await supabase.auth.signUp({ email, password })
      setEmail('')
      setPassword('')
      if (error) {
        alert(error.message)
      }
    }
  }
  function signOut() {
    supabase.auth.signOut()
  }
  return (
    <div className="flex flex-col items-center justify-center">
      <p>{loginUser.email}</p>
      <ArrowRightOnRectangleIcon
        className="my-6 h-6 w-6 cursor-pointer text-blue-500"
        onClick={signOut}
      />
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="border border-gray-300 rounded px-3 py-2 my-2 text-sm placeholder-gray-500 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="border border-gray-300 rounded px-3 py-2 my-2 text-sm placeholder-gray-500 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="my^6 flex justify-center text-sm">
          <button
            type="submit"
            className="rounded-md bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700"
          >
            {isLogin ? 'Login' : 'Sign Up'}
          </button>
        </div>
      </form>
      <p
        className="font-medium cursor-pointer hover:text-indigo-500"
        onClick={() => setIsLogin(!isLogin)}
      >
        change mode ?
      </p>
    </div>
  )
}
