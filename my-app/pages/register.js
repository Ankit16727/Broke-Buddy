import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Register from '@/components/Register';
export default function About() {
  return (
    <div className="flex flex-col min-h-screen">
        {/* Header */}
        <header className="z-20 fixed w-full bg-white"><Navbar/></header>

        {/* Main Content */}
        <main className="flex-grow "><Register/></main>

        {/* Footer */}
        <footer className="bg-black h-28 text-white p-4 z-20"><Footer/></footer>
    </div>
  )
}