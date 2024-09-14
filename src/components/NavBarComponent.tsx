import Image from 'next/image'; // Importa el componente de Next.js
import StellarLogo from '@/assets/Stellar-NavBar.svg';

export default function NavBarComponent() {

    
    const navBarItems: string[] = [
        'Features',
        'Planes',
        'Nosotros'
    ];

    return (
        <nav id='hero' className="flex justify-between items-center">
            <Image 
                src={StellarLogo} 
                alt="Stellar Logo" 
                width={290} 
                height={40} 
                className="p-8 cursor-pointer" 
            />
            <ul className="flex gap-8 p-14">
                {navBarItems.map((item: string, index: number) => (
                    <li key={index} className="text-strong-blue font-raleway text-[20px] font-medium cursor-pointer">
                        {item}
                    </li>
                ))}
            </ul>
        </nav>
    );
}
