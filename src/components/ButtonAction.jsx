export const ButtonAction = (props) => {
   const { label, btnFunction, target, icon, href } = props;
   return (
      <div className='flex flex-col items-center'>
         <a
            target={target}
            href={href}
            role='button'
            onClick={btnFunction}
            className='transition-all hover:scale-105'>
            {icon}
         </a>
      </div>
   );
};
