import QRCode from 'qrcode.react';

const QRCodeComponent = () => {
   return (
      <div className='p-2 bg-white'>
         <QRCode
            value={`https://tarjeta-digital-d1mi.vercel.app${window.location.pathname}`}
            style={{ width: '140px', height: '140px' }}
         />
      </div>
   );
};

export default QRCodeComponent;
