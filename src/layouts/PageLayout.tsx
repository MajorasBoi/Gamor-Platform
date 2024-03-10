import { Navbar } from '../components/Navbar/Navbar'
import { type PageLayoutProps } from '../types.d'

export const PageLayout = ({ children }: PageLayoutProps) => {
    return (
        <div>
            <Navbar />
            <main style={{ gap: '1cm' }}>
                {children}
            </main>
        </div>
    )
}
