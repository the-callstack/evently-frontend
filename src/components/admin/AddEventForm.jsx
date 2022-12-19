import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCategoryState } from "../../features/categories/categorySlice";
import { createEvent } from "../../features/events/EventSlice";

export const AddEventForm = () => {
  const { category } = useSelector(selectCategoryState);
  // console.log(category);
  const dispatch = useDispatch();
  const handleCreate = (e) => {
    e.preventDefault();
    const data = {
      eventType: e.target.type.value,
      categories: parseInt(e.target.events.value),
    };
    try {
      dispatch(createEvent(data));
      alert("Event has been created successfly");
    } catch (e) {
      alert(e.message);
    }
  };
  return (
    <div className="my-8 w-[30%]">
      <form encType="multipart/form-data" onSubmit={handleCreate}>
        <div>
          <label
            htmlFor="name"
            className="block mb-2 text-sm text-gray-600 dark:text-gray-600"
          >
            Event Type
          </label>
          <input
            type="text"
            required
            name="event"
            id="type"
            placeholder="wedding.."
            className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-600 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
          />
        </div>
        <div className="mt-6">
          <select
            id="events"
            className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
          >
            <option value="" disabled selected hidden>
              Select Category
            </option>
            {category.categories?.map((category) => {
              return (
                <option value={category.id} key={category.id}>
                  {category.name}
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
    </div>
  );
};
