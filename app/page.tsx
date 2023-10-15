import Image from 'next/image';
import Link from "next/link";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className='text-4xl text-gray-700'>Quiz App</h1>
      <div className='w-full p-10 m-auto text-center'>
        <Link href="/quiz">
          <button className='w-2/6 rounded-lg bg-cyan-900 border-cyan-900 py-5 m-auto text-white hover:bg-cyan-700'>شروع سوالات</button>
        </Link>
      </div>
    </main>
  )
}
