import { useState } from 'react';
import { FaCirclePlus } from 'react-icons/fa6';

export const AddContact = () => {
   const [vCardData] = useState(
      `BEGIN:VCARD
       VERSION:3.0
       FN:Nombre del Contacto
       ORG:Nombre de la Organización
       TEL;TYPE=WORK,VOICE:(123) 456-7890
       EMAIL;TYPE=PREF,INTERNET:contacto@example.com
       END:VCARD`
   );

   const handleSaveContact = () => {
      if (navigator.userAgent.match(/(iPod|iPhone|iPad)/)) {
         // Si es un dispositivo iOS, utiliza data URI
         const link = document.createElement('a');
         link.href = 'data:text/vcard;charset=utf-8,' + encodeURIComponent(vCardData);
         link.target = '_blank';
         link.rel = 'noopener noreferrer';
         link.download = 'contacto.vcf';
         document.body.appendChild(link);
         link.click();
         document.body.removeChild(link);
      } else {
         // Si no es un dispositivo iOS, utiliza Blob
         const blob = new Blob([vCardData], { type: 'text/vcard' });
         const url = window.URL.createObjectURL(blob);
         const link = document.createElement('a');
         link.href = url;
         link.setAttribute('download', 'contacto.vcf');
         link.click();
         window.URL.revokeObjectURL(url);
      }
   };

   return (
      <button
         onClick={descargarVCard}
         className='px-20 py-5 rounded-full bg-zinc-100 shadow-lg text-white font-semibold text-4xl flex items-center transition-all hover:scale-105'>
         <FaCirclePlus
            size={'1.3em'}
            className='font-semibold text-black'
         />
         <span className='text-black'>&nbsp;GUARDAR CONTACTO</span>
      </button>
   );
};
