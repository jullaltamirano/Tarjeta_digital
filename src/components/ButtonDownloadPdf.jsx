import { FaFileDownload } from 'react-icons/fa';

export const AddContact = () => {
   return (
      <button
         className='px-20 py-5 rounded-full bg-zinc-800 text-white font-semibold text-4xl flex items-center transition-all hover:scale-105'>
         <FaFileDownload
            size={'1.3em'}
            className='font-semibold'
         />
         <span>DESCARGAR TARJETA</span>
      </button>
   );
};
