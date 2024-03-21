import { useState } from 'react';

import QRCode from 'qrcode.react';
import { BiSolidPhoneCall } from 'react-icons/bi';
import { MdEmail } from 'react-icons/md';
import { IoLogoWhatsapp } from 'react-icons/io';
import { IoMdShare } from 'react-icons/io';
import { FiPlusCircle } from 'react-icons/fi';

import { ButtonAction } from '../components/ButtonAction';

export const Buttons = (props) => {
   const { data } = props;
   const [openModal, setOpenModal] = useState(false);

   // MÉTODOS BOTONES
   const handleLlamarClick = () => {
      window.location.href = `tel:${data.codigo_telefono}${data.telefono}`;
   };

   const handleEmailClick = () => {
      window.location.href = `mailto:${data.email}`;
   };

   const handleWhatsappClick = () => {
      window.open(data.whatsapp, '_blank');
   };

   const handleShareClick = () => {
      setOpenModal(true);
   };

   const buttonsData = [
      {
         label: 'Llamar',
         function: handleLlamarClick,
         icon: (
            <BiSolidPhoneCall
               size={'7em'}
               className='text-blue-900'
            />
         ),
         href: `tel:${data.codigo_telefono}${data.telefono}`,
      },
      {
         label: 'Correo',
         function: handleEmailClick,
         icon: (
            <MdEmail
               size={'7em'}
               className='text-blue-900'
            />
         ),
         href: `mailto:${data.email}`,
      },
      {
         label: 'Whatsapp',
         function: handleWhatsappClick,
         icon: (
            <IoLogoWhatsapp
               size={'7em'}
               className='text-blue-900'
            />
         ),
         href: data.whatsapp,
      },
      {
         label: 'Compartir contacto',
         function: handleShareClick,
         icon: (
            <IoMdShare
               size={'7em'}
               className='text-blue-900'
            />
         ),
      },
   ];

   return (
      <section className='grid grid-cols-4 pt-32 py-16 px-6 md:px-20 lg:px-32'>
         {buttonsData &&
            buttonsData.map((btn) => (
               <div
                  key={btn.label}
                  className='col-span-2 flex justify-center mb-32 lg:col-span-1'>
                  <ButtonAction
                     label={btn.label}
                     btnFunction={btn.function}
                     icon={btn.icon}
                     href={btn.href}
                  />
               </div>
            ))}

         {/* //* BOTÓN AGREGAR CONTACTO */}
         {/* <div className='col-span-4 flex justify-center h-full items-end'>
            <ButtonDownloadPdf />
         </div> */}

         {openModal && (
            <div className='fixed left-0 top-0 flex h-full w-full items-center justify-center bg-black bg-opacity-50 py-10'>
               <div className='max-h-full w-full max-w-md overflow-y-auto rounded-2xl bg-white'>
                  <span
                     className='float-right font-semibold text-zinc-700 mx-8 mt-5 text-4xl'
                     role='button'
                     onClick={() => setOpenModal(false)}>
                     X
                  </span>
                  <div className='w-full'>
                     <div className='m-8 my-20 max-w-[500px] mx-auto'>
                        <div className='flex justify-center items-center'>
                           <QRCode
                              value={`https://tarjeta-digital-d1mi.vercel.app${window.location.pathname}`}
                              style={{ width: '300px', height: '300px' }}
                           />
                           {/* <img src={data.qr} alt={data.nombres} /> */}
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         )}
      </section>
   );
};
