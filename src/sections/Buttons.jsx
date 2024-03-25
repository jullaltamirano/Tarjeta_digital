import { useState } from 'react';

import QRCode from 'qrcode.react';
import { BiSolidPhoneCall } from 'react-icons/bi';
import { MdEmail } from 'react-icons/md';
import { IoLogoWhatsapp } from 'react-icons/io';
import { IoMdShare } from 'react-icons/io';
import { FaBuilding } from 'react-icons/fa';

import { ButtonAction } from '../components/ButtonAction';

export const Buttons = (props) => {
   const { data } = props;
   const [openModal, setOpenModal] = useState(false);
   const [openModal2, setOpenModal2] = useState(false);

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

   const handleInfoClick = () => {
      setOpenModal2(true);
   };

   const buttonsData = [
      {
         label: 'Llamar',
         function: handleLlamarClick,
         icon: (
            <BiSolidPhoneCall
               size={'7em'}
               className='text-blue-900 hover:text-white'
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
               className='text-blue-900 hover:text-white'
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
               className='text-blue-900 hover:text-white'
            />
         ),
         href: data.whatsapp,
      },
      {
         label: 'Compartir QR',
         function: handleShareClick,
         icon: (
            <IoMdShare
               size={'7em'}
               className='text-blue-900 hover:text-white'
            />
         ),
      },
   ];

   return (
      <section className='grid grid-cols-12 pt-12 py-16 px-6 md:px-20 lg:px-32'>
         {/* {buttonsData &&
            buttonsData.map((btn) => ( */}
         <div className='col-span-1'></div>
         <div
            key={buttonsData[0].label}
            className='col-span-5 flex justify-center items-center h-[320px]'>
            <ButtonAction
               label={buttonsData[0].label}
               btnFunction={buttonsData[0].function}
               icon={buttonsData[0].icon}
               href={buttonsData[0].href}
            />
         </div>
         <div
            key={buttonsData[1].label}
            className='col-span-5 flex justify-center items-center h-[320px]'>
            <ButtonAction
               label={buttonsData[1].label}
               btnFunction={buttonsData[1].function}
               icon={buttonsData[1].icon}
               href={buttonsData[1].href}
            />
         </div>
         <div className='col-span-1'></div>
         <div
            key={buttonsData[2].label}
            className='col-span-3 flex justify-center items-center h-[320px]'>
            <ButtonAction
               label={buttonsData[2].label}
               btnFunction={buttonsData[2].function}
               icon={buttonsData[2].icon}
               href={buttonsData[2].href}
            />
         </div>
         <img
            class='col-span-6 w-80 h-80 rounded-full mx-auto border-8 border-amber-500'
            src={data?.img_link || '/user.webp'}
            alt={data?.nombres}
         />
         <div
            key={buttonsData[3].label}
            className='col-span-3 flex justify-center items-center h-[320px]'>
            <ButtonAction
               label={buttonsData[3].label}
               btnFunction={buttonsData[3].function}
               icon={buttonsData[3].icon}
               href={buttonsData[3].href}
            />
         </div>
         {/* ))} */}
         <div className='col-span-12 flex justify-center items-center h-[320px] mt-10'>
            <ButtonAction
               label={'Información de Empresa'}
               btnFunction={handleInfoClick}
               icon={
                  <FaBuilding
                     size={'7em'}
                     className='text-blue-900 hover:text-white'
                  />
               }
               href={undefined}
            />
         </div>

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

         {openModal2 && (
            <div className='fixed left-0 top-0 flex h-full w-full items-center justify-center bg-black bg-opacity-50 py-10'>
               <div className='max-h-full w-full max-w-3xl overflow-y-auto rounded-2xl bg-white p-5'>
                  <span
                     className='float-right font-semibold text-zinc-700 mx-8 mt-5 text-4xl'
                     role='button'
                     onClick={() => setOpenModal2(false)}>
                     X
                  </span>
                  <div className='w-full'>
                     <div className='m-8 max-w-[800px]'>
                        <div className='flex justify-start items-center mt-16'>
                           <ul>
                              <li className='text-4xl'>
                                 <span className='font-semibold'>EMPRESA: </span>
                                 {data.empresa}
                              </li>
                              <li className='text-4xl mt-3'>
                                 <span className='font-semibold'>TEL&Eacute;FONO: </span>
                                 {data.telefono_empresa}
                              </li>
                              <li className='text-4xl mt-3'>
                                 <span className='font-semibold'>DIRECCIÓN: </span>
                                 {data.direccion} - {data.distrito}, {data.ciudad} {data.pais}
                              </li>
                           </ul>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         )}
      </section>
   );
};
