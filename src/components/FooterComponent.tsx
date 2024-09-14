import Image from 'next/image'; 
import GithubLogo from '@/assets/github-dark.svg';
import Logo from "../assets/StellarLogo-Over-Black.svg";
import Link from 'next/link';

export default function FooterComponent() {
  return (
    <footer className="mt-[10rem] p-6 w-full bg-gradient-to-r from-[#1C3676] to-[#3565DC] flex flex-col gap-4 items-center justify-center">
      <Link href="#hero">
      <Image
        src={Logo}
        alt="Stellar Logo"
        width={200} 
        height={200}
      />
      </Link>
      <p className="mt-2 text-white">
        Developed by{' '}
        <a 
          className="cursor-pointer"
          href="https://github.com/KevinLatino" 
          target="_blank" 
        >
          @KevinLatino
        </a>{' '}
        and{' '}
        <a 
          className="cursor-pointer"
          href="https://github.com/Villarley" 
          target="_blank" 
        >
          @Villarley
        </a>
      </p>
      <Image
        src={GithubLogo}
        alt="GitHub Logo"
        width={40} 
        height={40}
      />
    </footer>
  );
}
