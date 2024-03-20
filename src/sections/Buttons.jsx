import { useState } from 'react';

import { BiSolidPhoneCall } from 'react-icons/bi';
import { MdEmail } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io";
import { IoMdShare } from "react-icons/io";
import { FiPlusCircle } from "react-icons/fi";

import { ButtonAction } from '../components/ButtonAction';

export const Buttons = (props) => {
   const { data } = props;
   const [openModal, setOpenModal] = useState(false)

   // MÉTODOS BOTONES
   const handleLlamarClick = () => {
      window.location.href = `tel:${data.codigo_telefono}${data.telefono}`;
   };

   const handleEmailClick = () => {
      window.location.href = `mailto:${data.email}`;
   };

   const handleWhatsappClick = () => {
      window.open(data.whatsapp, '_blank')
   };

   const handleShareClick = () => {
      setOpenModal(true)
   };

   // MÉTODO PARA AGREGAR CONTACTO
   const handleAddContact = (name, phoneNumber) => {
      if ('contacts' in navigator) {
         // Objeto de contacto
         const contact = {
            name: [{ displayName: name }],
            phoneNumbers: [{ value: phoneNumber }],
         };
         
         // Solicitar al usuario agregar el contacto
         navigator.contacts.save(contact).then(
            () => {
              console.log('Contacto guardado exitosamente');
            },
            (err) => {
              console.error('Error al guardar el contacto:', err);
            }
         );
      } else {
         console.error('La API de contactos no está disponible en este navegador.');
      }
    };

   const buttonsData = [
      { label: 'Llamar', function: handleLlamarClick, icon: <BiSolidPhoneCall size={'3em'} className='text-white' />, href: `tel:${data.codigo_telefono}${data.telefono}` },
      { label: 'Correo', function: handleEmailClick, icon: <MdEmail size={'3em'} className='text-white' />, href: `mailto:${data.email}` },
      { label: 'Whatsapp', function: handleWhatsappClick, icon: <IoLogoWhatsapp size={'3em'} className='text-white' />, href: data.whatsapp },
      { label: 'Compartir contacto', function: handleShareClick, icon: <IoMdShare size={'3em'} className='text-white' /> },
   ];

   return (
      <section className='grid grid-cols-4 py-12  px-6 md:px-20 lg:px-32 '>
         {buttonsData && buttonsData.map(btn => (
            <div key={btn.label} className='col-span-2 flex justify-center mb-20 lg:col-span-1'>
               <ButtonAction
                  label={btn.label}
                  btnFunction={btn.function}
                  icon={btn.icon}
                  href={btn.href}
               />
            </div>
         ))}

         <div className='col-span-4 flex justify-center'>
            <button className='px-10 py-2 rounded-2xl bg-zinc-800 text-white font-semibold flex items-center transition-all hover:scale-105' onClick={() => handleAddContact(`${data.nombres} ${data.apellidos}`, `${data.codigo_telefono}${data.telefono}`)}><FiPlusCircle size={'1.3em'} className='font-semibold' />&nbsp;GUARDAR CONTACTO</button>
         </div>

         {openModal && (
            <div className="fixed left-0 top-0 flex h-full w-full items-center justify-center bg-black bg-opacity-50 py-10">
               <div className="max-h-full w-full max-w-md overflow-y-auto rounded-2xl bg-white">
                  <span className='float-right font-semibold text-zinc-600 mx-5 mt-2' role='button' onClick={() => setOpenModal(false)}>X</span>
                  <div className="w-full">
                     <div className="m-8 max-w-[400px] mx-auto">
                        <div className="flex justify-center items-center">
                           <img src={data.qr} alt={data.nombres} />
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         )}
      </section>
   );
};
