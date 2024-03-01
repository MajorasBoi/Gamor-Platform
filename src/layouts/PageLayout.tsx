import { Navbar } from '../components/Navbar/Navbar'

export const PageLayout = ({ children }) => {
    return (
        <div>
            <Navbar />
            <main>
                {children}
            </main>
        </div>
    )
}
