import Image from "next/image";

const DropdownMenu: React.FC = () => {

  return (
    <>
      <div className="max-w-[417px] h-[746px] ">

        <div className="px-4">
          <h2 className="text-3xl font-semibold border-b-2 max-w-[300px] py-6   border-gray-400" >Shopping Card</h2>
          <div className="flex mt-10 space-x-4 items-center">
            <Image src="/product2.png" alt="prodect" width={200} height={200} />
            <div className="">
              <h2>Asgaard sofa</h2>
              <p className="text-sm" >1 x  <span className="text-[#B88E2F] text-sm">Rs 25,000.00 </span></p>
            </div>
            <Image src="/crossIcon.png" alt="prodect" width={50} height={50} className="h-4 w-4" />
          </div>
        </div>
        <div className="space-x-6 lg:space-x-32 px-4 mt-32 lg:mt-40">
          <span>Subtotal</span>
          <span className="text-[#B88E2F]">25,000.00</span>
        </div>
        <div className="mt-6 ">
          <hr />
        </div>
        <div className="px-4 space-x-5 lg:space-x-20 mt-6">
          <button className="border border-black rounded-2xl px-6 py-1 ">View Cart</button>
          <button className="border border-black rounded-2xl px-6 py-1 ">Checkout</button>
        </div>
      </div>
    </>
  );
};

export default DropdownMenu;