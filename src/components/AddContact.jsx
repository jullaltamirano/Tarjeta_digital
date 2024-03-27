import { useState } from 'react';
import { FaCirclePlus } from 'react-icons/fa6';

export const AddContact = (props) => {
   const { data } = props;
   const handleSaveContact = () => {
      window.location.href = `tel:${data.codigo_telefono}${data.telefono}`;
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
