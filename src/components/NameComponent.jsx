const NameComponent = (props) => {
   const { data } = props;
   return (
      <h1 class=' text-center text-4xl border-b border-white py-4 px-4'>
         <b>{data?.nombres}</b> {data?.apellidos}
      </h1>
   );
};

export default NameComponent;
