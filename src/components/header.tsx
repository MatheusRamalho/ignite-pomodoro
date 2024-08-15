'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ScrollText, TimerIcon } from 'lucide-react'

import logoIgnite from '@/assets/ignite-logo.svg'

export function Header() {
    const pathname = usePathname()

    return (
        <header className="flex items-center justify-between">
            <Image src={logoIgnite} alt="Logo" className="w-11" width={44} />

            <nav>
                <ul className="list-none flex gap-2">
                    <li className="size-12">
                        <Link
                            className="group size-full flex items-center justify-center text-gray-100 border-t-4 border-b-4 border-transparent"
                            href="/"
                            title="Timer"
                        >
                            <TimerIcon
                                size={28}
                                className={`group-hover:text-green-300 ${pathname === '/' && 'text-green-500'}`}
                            />
                        </Link>
                    </li>

                    <li className="size-12">
                        <Link
                            className="group size-full flex items-center justify-center text-gray-100 border-t-4 border-b-4 border-transparent"
                            href="/history"
                            title="Histórico"
                        >
                            <ScrollText
                                size={28}
                                className={`group-hover:text-green-300 ${pathname === '/history' && 'text-green-500'}`}
                            />
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
