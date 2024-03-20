export const ButtonAction = (props) => {
   const { label, btnFunction, icon, href } = props;
   return (
      <div className='flex flex-col items-center gap-3'>
         <a
            href={href}
            target='_blank'
            role='button'
            onClick={btnFunction}
            className='rounded-full bg-red-500 p-4 shadow-lg transition-all hover:scale-105'>
            {icon}
         </a>
         <span className='font-semibold text-2xl text-center'>{label}</span>
      </div>
   );
};
