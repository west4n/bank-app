import type { Metadata } from 'next'
import { Inter, IBM_Plex_Serif } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['cyrillic'], variable: '--font-inter' })
const ibmPlexSerif = IBM_Plex_Serif({
	subsets: ['cyrillic'],
	weight: ['400', '700'],
	variable: '--font-ibm-plex-serif',
})

export const metadata: Metadata = {
	title: 'Домашний банк',
	description: 'Домашний банк - это современная платформа домашнего банка.',
	icons: {
		icon: '/icons/logo.svg',
	},
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='ru'>
			<body className={`${inter.variable} ${ibmPlexSerif.variable}`}>
				{children}
			</body>
		</html>
	)
}
