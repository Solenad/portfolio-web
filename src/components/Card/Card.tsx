export default function Card() {
  return (
    <>
      <div
        className="rounded-xl border border-gray-700 shadow-xl overflow-hidden 
        flex flex-col
        w-[90%] h-[85vh] bg-[url(../../../public/images/bg.jpg)] bg-no-repeat bg-cover bg-center"
      >
        <div className="h-full"></div>
        <div className="h-full flex flex-col justify-start text-left px-10 md:px-20 lg:px-40">
          <h1 className="text-7xl">Roe Dizon</h1>
          <p className="text-xl"> Backend Developer</p>
        </div>
      </div>
    </>
  );
}
