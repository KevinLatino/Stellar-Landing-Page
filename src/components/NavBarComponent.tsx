import StellarLogo from '@/assets/Stellar-NavBar.svg';

export default function NavBarComponent() {
    const navBarItems = [
        'Features',
        'Plane',
        'Nosotros'
    ];

    return (
        <nav className="p-8 flex justify-end">
            <img src={StellarLogo} />
            <ul className="flex gap-9">
                {navBarItems.map((item, index) => (
                    <li key={index} className="text-black font-raleway text-[20px] font-medium cursor-pointer">
                        {item}
                    </li>
                ))}
            </ul>
        </nav>
    );
}
