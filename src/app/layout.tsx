/* eslint-disable camelcase */
import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'

import '@/styles/globals.css'
import { CyclesContextProvider } from '@/contexts/CyclesContext'
import { Header } from '@/components/header'

const roboto = Roboto({
    weight: ['400', '700'],
    style: ['normal'],
    subsets: ['latin'],
    display: 'swap',
})

export const metadata: Metadata = {
    title: 'Ignite Pomodoro',
    description: 'Ignite Pomodoro',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body
                className={`${roboto.className} bg-gray-900 text-gray-300 antialiased`}
            >
                <CyclesContextProvider>
                    <div className="max-w-[74rem] min-h-[calc(100vh-10rem)] mx-auto my-20 p-10 rounded-lg bg-gray-800 flex flex-col">
                        <Header />
                        {children}
                    </div>
                </CyclesContextProvider>
            </body>
        </html>
    )
}
