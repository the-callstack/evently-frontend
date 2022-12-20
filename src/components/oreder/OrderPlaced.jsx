import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUserState } from "../../features/auth/authSlice";
import { removeAll, selectCartState } from "../../features/Cart/CartSlice";

export const OrderPlaced = ({ show, setEdit }) => {
  const dispatch = useDispatch();
  const { order } = useSelector(selectCartState);
  const { loggedUser } = useSelector(selectUserState);
  const showMenu = () => {
    setEdit(false);
    dispatch(removeAll());
  };

  return (
    <>
      <div
        className={
          show
            ? `w-full h-full bg-gray-900 bg-opacity-80 top-0 fixed sticky-0`
            : `hidden`
        }
      >
        <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
          <div className="relative w-auto my-6 mx-auto max-w-3xl">
            {/*content*/}
            <div className="border-0  m-10 rounded-lg shadow-lg relative flex flex-col w-full bg-gray-100 outline-none focus:outline-none">
              {/*header*/}
              <div className="flex justify-center p-5 border-b border-solid border-slate-200 rounded-t">
                <h3 className="text-3xl font-semibold">Great !</h3>
              </div>
              <div className="h-10 flex justify-center items-center ">
                <h3 className="font-bold text-xl text-green-600">
                  Order has been placed successfully !
                </h3>
              </div>
              <div>
                <div>
                  <table className="font-sans">
                    <tr className="border-1 p-12 text-left">
                      <th className="border-1 p-12 text-left">Client name</th>
                      <th className="border-1 p-12 text-left">Delivery Date</th>
                      <th className="border-1 p-12 text-left">Total Price</th>
                    </tr>
                    <tr className="border-1 p-12 text-left">
                      <td className="text-center">{loggedUser?.username}</td>
                      <td className="text-center">{order?.deleveryDate}</td>
                      <td className="text-center">{order?.totalPrice + 10}</td>
                    </tr>
                  </table>
                </div>
              </div>
              <div className="flex items-center justify-end p-6 border-t border-slate-200 rounded-b">
                <button
                  className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                  onClick={showMenu}
                >
                  Close
                </button>
              </div>
              {/*footer*/}
            </div>
          </div>
        </div>
        <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
      </div>
    </>
  );
};
