import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createCategory } from "../../features/categories/categorySlice";
import { selectEventState } from "../../features/events/EventSlice";
import { AlertTempo } from "../alert/AlertTempo";

export const AddCategoryForm = () => {
  const { events } = useSelector(selectEventState);
  const [edit, setEdit] = useState(false);
  const dispatch = useDispatch();
  const handleCreate = (e) => {
    e.preventDefault();
    const data = {
      name: e.target.name.value,
      events: parseInt(e.target.events.value),
    };
    console.log(data);
   
      dispatch(createCategory(data));
      setEdit(true);
  };
  return (
    <div className="my-8 w-[30%] border-2 bg-gray-800 rounded-lg p-8">
      <form encType="multipart/form-data" onSubmit={handleCreate}>
        <div>
          <label
            htmlFor="name"
            className="block mb-2 text-sm text-gray-600 dark:text-gray-600"
          >
            Category Name
          </label>
          <input
            type="text"
            required
            name="email"
            id="name"
            placeholder="furniture.."
            className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-600 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
          />
        </div>
        <div className="mt-6">
          <select
            id="events"
            className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
          >
            <option value="" disabled selected hidden>
              Select Events
            </option>
            {events.events?.map((event) => {
              return (
                <option value={event.id} key={event.id}>
                  {event.eventType}
                </option>
              );
            })}
          </select>
        </div>
        <div className="mt-6">
          <button
            type="submit"
            className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50"
          >
            Create
          </button>
        </div>
      </form>
      <AlertTempo show={edit} setEdit={setEdit} msg='Category has been created successfly.' />
    </div>
  );
};
