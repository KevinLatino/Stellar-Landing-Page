"use client"
import React from 'react';
import ContactForm from '@/components/ContactForm';
import StellarResource from '@/assets/Stellar-Resource.svg';
import Image from 'next/image'; 

const ContactUs: React.FC = () => {
  return (
    <div className="flex justify-center items-center w-full  md:mt-24">
      {/* Sección del Formulario */}
      <div className="w-1/2 md:w-1/2">
        <ContactForm />
      </div>
      
      {/* Sección de la Imagen */}
      <div className="w-[30%]  hidden md:block">
        <Image
          src={StellarResource}
          alt="Stellar"
          width={600}
          height={500}
          className="object-contain"
          draggable={false}
        />
      </div>
    </div>
  );
};

export default ContactUs;
