import { ArrowUp } from 'lucide-react'
import Link from 'next/link'

export default function TopButton () {
  return (
    <Link href="#home" className="flex fixed justify-center items-center rounded-full z-10 bottom-5 end-5 h-9 w-9 text-center bg-secondary-color text-white">
        <ArrowUp />
    </Link>
  )
}