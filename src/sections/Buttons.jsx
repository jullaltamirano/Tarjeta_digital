import { useState } from 'react';

import QRCode from 'qrcode.react';
import { BiSolidPhoneCall } from 'react-icons/bi';
import { MdEmail } from 'react-icons/md';
import { IoLogoWhatsapp } from 'react-icons/io';
import { IoMdShare } from 'react-icons/io';
import { FaBuilding } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';

import { ButtonAction } from '../components/ButtonAction';
import { AddContact } from '../components/AddContact';

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

   const handleInClick = () => {
      window.open(data.linkedin, '_blank');
   };

   const handleShareClick = () => {
      setOpenModal(true);
   };

   const handleInfoClick = () => {
      setOpenModal2(true);
   };

   const handleSaveContactBtn = () => {
      if (navigator.contacts) {
         const contacto = navigator.contacts.create();
         contacto.displayName = `${data.nombres} ${data.apellidos}`;
         const telefonoArray = [];
         telefonoArray[0] = new ContactField('mobile', data.telefono, true);
         contacto.phoneNumbers = telefonoArray;
         alert(contacto.phoneNumbers);
         contacto.save(
            function (contact) {
               alert('Contacto guardado correctamente');
            },
            function (error) {
               alert('Error al guardar el contacto: ' + error.code);
            }
         );
      } else {
         alert('Tu dispositivo no admite guardar contactos.');
      }
   };

   const buttonsData = [
      {
         label: 'Llamar',
         function: handleLlamarClick,
         target: '',
         icon: (
            <BiSolidPhoneCall
               size={'4em'}
               className='text-white hover:text-amber-500'
            />
         ),
         href: `tel:${data.codigo_telefono}${data.telefono}`,
      },
      {
         label: 'Correo',
         function: handleEmailClick,
         target: '',
         icon: (
            <MdEmail
               size={'4em'}
               className='text-white hover:text-amber-500'
            />
         ),
         href: `mailto:${data.email}`,
      },
      {
         label: 'Whatsapp',
         function: handleWhatsappClick,
         target: '_blank',
         icon: (
            <IoLogoWhatsapp
               size={'4em'}
               className='text-white hover:text-amber-500'
            />
         ),
         href: data.whatsapp,
      },
      {
         label: 'LinkedIn',
         function: handleInClick,
         target: '',
         icon: (
            <FaLinkedin
               size={'4em'}
               className='text-white hover:text-amber-500'
            />
         ),
      },
      {
         label: 'Compartir QR',
         function: handleShareClick,
         target: '',
         icon: (
            <IoMdShare
               size={'4em'}
               className='text-white hover:text-amber-500'
            />
         ),
      },
      {
         label: 'Información Empresa',
         function: handleInfoClick,
         target: '',
         icon: (
            <FaBuilding
               size={'4em'}
               className='text-white hover:text-amber-500'
            />
         ),
      },
   ];

   return (
      <section className='grid grid-cols-12 pt-12 py-16 px-6 md:px-32'>
         {buttonsData &&
            buttonsData.map((btn) => (
               <div
                  key={btn.label}
                  className='col-span-2 flex justify-center items-center h-[320px]'>
                  <ButtonAction
                     label={btn.label}
                     btnFunction={btn.function}
                     icon={btn.icon}
                     href={btn.href}
                  />
               </div>
            ))}

         {/* //* BOTÓN AGREGAR CONTACTO */}
         <div className='col-span-12 flex justify-center h-full items-end'>
            <AddContact onClick={handleSaveContactBtn} />
         </div>

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
