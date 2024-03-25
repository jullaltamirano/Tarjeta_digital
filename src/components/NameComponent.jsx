const NameComponent = (props) => {
   const { data } = props;
   return (
      <h1 class=' text-center text-5xl border-b border-white py-4 px-4'>
         <b>Oscar Juli&acute;n</b> {data?.apellidos}
      </h1>
   );
};

export default NameComponent;