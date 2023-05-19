import MainWrapper from "./_components/MainWrapper";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Nathanel Corpuz Developer Portfolio",
	description: "A website to showcase my profession as a web developer",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<MainWrapper>{children}</MainWrapper>
			</body>
		</html>
	);
}
