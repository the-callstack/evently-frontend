import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUserState } from "../../features/auth/authSlice";
import { makeOrder, selectCartState } from "../../features/Cart/CartSlice";
import { OrderPlaced } from "../oreder/OrderPlaced";

function CartSummary({ items, totalPrice }) {
  const dispatch = useDispatch();
  const { loggedUser } = useSelector(selectUserState);
  const { status } = useSelector(selectCartState);
  const [edit, setEdit] = useState(false);

  const order = (e) => {
    e.preventDefault();
    const today = new Date();
    const yyyy = today.getFullYear();
    let mm = today.getMonth() + 1;
    let dd = today.getDate();

    if (dd < 10) dd = "0" + dd;
    if (mm < 10) mm = "0" + mm;
    const itemsDetails = items.map((item) => {
      if (item.item.type === "sale") {
        return {
          quantity: item.quantity,
          price: item.item.price,
          SaleItemId: item.item.id,
        };
      } else {
        return {
          quantity: item.quantity,
          price: item.item.price,
          RentalItemId: item.item.id,
          trackerId: item.item.trackerId ? item.item.trackerId : null,
        };
      }
    });
    const formattedToday = yyyy + "-" + mm + "-" + dd;
    const data = {
      UserId: loggedUser?.id,
      orderDate: formattedToday,
      deleveryDate: e.target.deleveryDate.value,
      details: itemsDetails,
      accessToken: loggedUser?.accessToken,
    };
    console.log(data);
    dispatch(makeOrder(data));
    setEdit(status);
  };

  return (
    <>
      <OrderPlaced show={edit} setEdit={setEdit} />
      <form id="summary" className="w-1/4 px-8 py-10" onSubmit={order}>
        <h1 className="font-semibold text-2xl border-b pb-8">Order Summary</h1>
        <div className="flex justify-between mt-10 mb-5">
          <span className="font-semibold text-sm uppercase">
            {items?.length}
          </span>
          <span className="font-semibold text-sm">
            {totalPrice ? totalPrice : 0}
          </span>
        </div>
        <div>
          <label className="font-medium inline-block mb-3 text-sm uppercase">
            Shipping
          </label>
          <select className="block p-2 text-gray-600 w-full text-sm">
            <option>Standard shipping - $10.00</option>
          </select>
        </div>
        <div className="py-10">
          <label
            htmlFor="deleveryDate"
            className="font-semibold inline-block mb-3 text-sm "
          >
            Delivery Date
          </label>
          <input type="date" id="deleveryDate" className="p-2 text-sm w-full" />
        </div>
        <div className="border-t mt-8">
          <div className="flex font-semibold justify-between py-6 text-sm uppercase">
            <span>Total cost</span>
            <span>{totalPrice ? totalPrice + 10 : 0}</span>
          </div>
          <button
            type="submit"
            className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full"
          >
            Checkout
          </button>
        </div>
      </form>
    </>
  );
}

export default CartSummary;
