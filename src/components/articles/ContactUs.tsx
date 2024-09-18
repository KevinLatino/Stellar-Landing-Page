"use client"
import React from 'react';
import ContactForm from '@/components/ContactForm';
import StellarResource from '@/assets/Stellar-Resource.svg';
import Image from 'next/image';
import ShimmerButton from '../magicui/shimmer-button'; // Asegúrate de que ShimmerButton esté correctamente importado

const ContactUs: React.FC = () => {
  return (
    <div className="flex justify-between items-center w-full mt-6 md:mt-24 p-8">
      {/* Sección del Formulario */}
      <div className="w-full md:w-1/2">
        <ContactForm />
      </div>
      
      {/* Sección de la Imagen */}
      <div className="w-[40%] hidden md:block">
        <Image
          src={StellarResource}
          alt="Stellar"
          width={500}
          height={500}
          className="object-contain"
          draggable={false}
        />
      </div>
    </div>
  );
};

export default ContactUs;
