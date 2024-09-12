import Image from 'next/image'; // Importa el componente de Next.js
import StellarLogo from '@/assets/Stellar-NavBar.svg';

export default function NavBarComponent() {
    const navBarItems = [
        'Features',
        'Plane',
        'Nosotros'
    ];

    return (
        <nav className="flex justify-between items-center">
            <Image 
                src={StellarLogo} 
                alt="Stellar Logo" 
                width={290} 
                height={40} 
                className="p-8" 
            />
            <ul className="flex gap-8 p-8">
                {navBarItems.map((item, index) => (
                    <li key={index} className="text-black font-raleway text-[20px] font-medium cursor-pointer">
                        {item}
                    </li>
                ))}
            </ul>
        </nav>
    );
}
