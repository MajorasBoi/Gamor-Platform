import { Navbar } from '../components/Navbar/Navbar'

interface PageLayoutProps {
    children: React.ReactNode
}

export const PageLayout = ({ children }: PageLayoutProps) => {
    return (
        <div>
            <Navbar />
            <main>
                {children}
            </main>
        </div>
    )
}
