import { useState } from 'react';
import { FaCirclePlus } from 'react-icons/fa6';

export const AddContact = () => {
   const handleSaveContact = () => {
      const contactData = {
         name: 'Nombre del Contacto',
         organization: 'Nombre de la Organización',
         phone: '(123)456-7890',
         email: 'contacto@example.com',
      };

      const contactURL = `BEGIN:VCARD
  VERSION:2.1
  FN:${contactData.name}
  ORG:${contactData.organization}
  TEL;WORK;VOICE:${contactData.phone}
  EMAIL;INTERNET:${contactData.email}
  END:VCARD`;

      window.open(contactURL);
   };

   return (
      <button
         onClick={handleSaveContact}
         className='px-20 py-5 rounded-full bg-zinc-100 shadow-lg text-white font-semibold text-4xl flex items-center transition-all hover:scale-105'>
         <FaCirclePlus
            size={'1.3em'}
            className='font-semibold text-black'
         />
         <span className='text-black'>&nbsp;GUARDAR CONTACTO</span>
      </button>
   );
};
