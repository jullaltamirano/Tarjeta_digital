import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { FaFileDownload } from "react-icons/fa";

export const ButtonDownloadPdf = () => {
   const generatePDF = () => {
      const input = document.getElementById('root'); // 'root' es el ID del elemento que contiene toda tu página
      console.log(input);
      
      html2canvas(input).then((canvas) => {
         const imgData = canvas.toDataURL('image/png');
         const pdf = new jsPDF('p', 'mm', 'a4');
         const width = pdf.internal.pageSize.getWidth();
         const height = pdf.internal.pageSize.getHeight();
         pdf.addImage(imgData, 'PNG', 0, 0, width, height);
         pdf.save('pagina.pdf');
      });
   };

   return (
      <button
         className='px-20 py-5 rounded-full bg-zinc-800 text-white font-semibold text-4xl flex items-center transition-all hover:scale-105'
         onClick={generatePDF}>
         <FaFileDownload
            size={'1.3em'}
            className='font-semibold'
         /><span>DESCARGAR TARJETA</span>
      </button>
   );
};
