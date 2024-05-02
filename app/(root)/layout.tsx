const HomeLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
	return (
		<main>
			Sidebar
			{children}
		</main>
	)
}

export default HomeLayout
