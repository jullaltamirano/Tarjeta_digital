import { FaFileDownload } from 'react-icons/fa';
import { FaCirclePlus } from 'react-icons/fa6';

const descargarVCard = () => {
   // Datos del contacto en formato vCard
   var vCardData = `BEGIN:VCARD
 VERSION:3.0
 FN:Nombre del Contacto
 ORG:Nombre de la Organización
 TEL;TYPE=WORK,VOICE:(123) 456-7890
 EMAIL;TYPE=PREF,INTERNET:contacto@example.com
 END:VCARD`;

   // Crear un Blob con los datos del vCard
   var blob = new Blob([vCardData], { type: 'text/vcard' });

   // Crear un enlace para descargar el Blob
   var downloadLink = document.createElement('a');
   downloadLink.href = window.URL.createObjectURL(blob);
   downloadLink.download = 'contacto.vcf';

   // Simular un clic en el enlace para descargar el archivo
   document.body.appendChild(downloadLink);
   downloadLink.click();
   document.body.removeChild(downloadLink);
};

export const AddContact = (props) => {
   const { onClick } = props;

   return (
      <button onClick={onClick} className='px-20 py-5 rounded-full bg-zinc-100 shadow-lg text-white font-semibold text-4xl flex items-center transition-all hover:scale-105'>
         <FaCirclePlus
            size={'1.3em'}
            className='font-semibold text-black'
         />
         <span className='text-black'>&nbsp;GUARDAR CONTACTO</span>
      </button>
   );
};
