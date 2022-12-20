import { useDispatch } from "react-redux";


export const PackageResultCard = ({ item }) => {
    const dispatch = useDispatch();

    return (
        <>
            <div className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
                <div className="flex w-2/5">
                    <div className="w-20">
                        <img className="h-24" src={item.imgPath ? item.imgPath : '###'} alt="" />
                    </div>
                    <div className="flex flex-col justify-between ml-4 flex-grow">
                        <span className="font-bold text-sm">{item.name}</span>
                        <span className="text-red-500 text-xs">{item.CatName ? item.CatName : ' '}</span>
                        <button href="##" className="font-semibold hover:text-red-500 text-gray-500 text-xs text-left">Remove</button>
                    </div>
                </div>
                <div className="flex justify-center w-1/5">
                    <label className="mx-2 font-semibold text-center w-16">{item.quantity}</label>
                </div>
                <span className="text-center w-1/5 font-semibold ">{item.price}</span>
                <span className="text-center w-1/5 font-semibold">{item.totalPrice}</span>
            </div>
        </>
    );
};