import Image from 'next/image'; 
import GithubLogo from '@/assets/github-dark.svg';

export default function FooterComponent() {
  return (
    <footer className="w-full h-32 bg-gradient-to-r from-[#1C3676] to-[#3565DC] flex flex-col items-center justify-center">
      <Image
        src={GithubLogo}
        alt="GitHub Logo"
        width={40} 
        height={40}
      />
      <p className="mt-2 text-white">
        Developed by{' '}
        <a 
          href="https://github.com/KevinLatino" 
          target="_blank" 
        >
          @KevinLatino
        </a>{' '}
        and{' '}
        <a 
          href="https://github.com/Villarley" 
          target="_blank" 
        >
          @Villarley
        </a>
      </p>
    </footer>
  );
}
