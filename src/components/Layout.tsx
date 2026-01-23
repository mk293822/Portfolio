type Props = {
	children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
	return (
		<div className="h-screen overflow-y-scroll snap-y snap-mandatory snap-always scroll-smooth no-scrollbar">
			<main>{children}</main>
		</div>
	);
};

export default Layout;
