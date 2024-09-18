import React, { useState, FormEvent } from 'react';
import Input from './Input';
import Textarea from './Textarea';
import ShimmerButton from './magicui/shimmer-button';

interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('/api/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <Input
        label="Nombre"
        name="name"
        type="text"
        value={formData.name}
        onChange={handleChange}
        required
        id="name"
      />
      <Input
        label="Correo Electrónico"
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        required
        id="email"
      />
      <Textarea
        label="Mensaje"
        name="message"
        value={formData.message}
        onChange={handleChange}
        required
        id="message"
      />
      <div className="mt-4">
        <ShimmerButton
          type="submit"
          disabled={status === 'loading'}
          className={`w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors ${
            status === 'loading' ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        >
          {status === 'loading' ? 'Enviando...' : 'Enviar'}
        </ShimmerButton>
      </div>
      {status === 'success' && (
        <p className="mt-4 text-green-600">¡Mensaje enviado con éxito!</p>
      )}
      {status === 'error' && (
        <p className="mt-4 text-red-600">Hubo un error al enviar el mensaje.</p>
      )}
    </form>
  );
};

export default ContactForm;
