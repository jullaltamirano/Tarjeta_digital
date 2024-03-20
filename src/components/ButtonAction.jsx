export const ButtonAction = (props) => {
   const { label, btnFunction, icon } = props;
   return (
      <div className='flex flex-col items-center gap-3'>
         <button
            onClick={btnFunction}
            className='rounded-full bg-red-500 p-4 shadow-lg transition-all hover:scale-105'>
            {icon}
         </button>
         <span className='font-semibold text-2xl text-center'>{label}</span>
      </div>
   );
};
