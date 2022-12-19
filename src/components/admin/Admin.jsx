import React, { useEffect, useReducer } from "react";
import { useDispatch } from "react-redux";
import { Link, Outlet } from "react-router-dom";
import { getAllCategories } from "../../features/categories/categorySlice";
import { getAllEvents } from "../../features/events/EventSlice";
import { AddCategoryForm } from "./AddCategoryForm";
import { AddEventForm } from "./AddEventForm";
import { CategoriesTable } from "./CategoriesTable";
import { EventsTable } from "./EventsTable";

const ACTIONS = {
  SHOW_EVENT: 'SHOWEVENT',
  SHOW_ADD_EVENT: 'SHOWADDEVENT',
  SHOW_CAT: 'SHOWCAT',
  SHOW_ADD_CAT: 'SHOWADDCAT',
  SHOW_USERS: 'SHOWUSERS'
};

const reducer = (state, action) => {
  console.log(action.type);
  switch (action.type) {
    case ACTIONS.SHOW_ADD_CAT:

      return { ...state, catForm: !state.catForm };
    case ACTIONS.SHOW_ADD_EVENT:
      return { ...state, eventForm: !state.eventForm };
    case ACTIONS.SHOW_CAT:
      return { ...state, cat: !state.cat };
    case ACTIONS.SHOW_EVENT:
      return { ...state, event: !state.event };
    case ACTIONS.SHOW_USERS:
      return { ...state, user: !state.user };
    default:
      return state;
  }

};

const initial = {
  user: false,
  event: false,
  cat: false,
  eventForm: false,
  catForm: false
};

export const Admin = () => {
  const dispatch = useDispatch();
  const [state, dispatch2] = useReducer(reducer, initial);
  const test = false;
  useEffect(() => {
    dispatch(getAllEvents());
    dispatch(getAllCategories());
  });
  return (
    <div >
      <h1 className="flex flex-col items-center justify-center h-20 text-3xl font-bold text-gray-800">Admin Dashboard</h1>
      <div className="flex justify-center mt-10">
        <div className="flex flex-col w-[60%] border border-b-gray-200 rounded-lg">
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-4 inline-block min-w-full sm:px-6 lg:px-8">
              <div className="overflow-hidden">
                <table className="min-w-full text-center">
                  <thead className="border-b bg-gray-800">
                    <tr>
                      <th
                        scope="col"
                        className="text-sm font-medium text-white px-6 py-4"
                      >
                        #
                      </th>
                      <Link
                        to={'/administrator/event'}
                        scope="col"
                        className="text-sm font-medium text-white px-6 py-4"
                      >
                        Events
                      </Link>
                      <Link
                        to={'/administrator/cat'}
                        scope="col"
                        className="text-sm font-medium text-white px-6 py-4"
                      >
                        Categories
                      </Link>
                      <th
                        scope="col"
                        className="text-sm font-medium text-white px-6 py-4"
                      >
                        Users
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white border-b">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        Table
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        <button
                          onClick={() => dispatch2({ type: ACTIONS.SHOW_EVENT, payload: !test })}
                          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                          Events
                        </button>
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        <button
                          onClick={() => dispatch2({ type: ACTIONS.SHOW_CAT })}
                          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                          Categories
                        </button>
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        <button
                          onClick={() => dispatch2({ type: ACTIONS.SHOW_USERS })}
                          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                          Users
                        </button>
                      </td>
                    </tr>
                    <tr className="bg-white border-b">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        Form
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        <button
                          onClick={() => dispatch2({ type: ACTIONS.SHOW_ADD_EVENT })}

                          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                          Add Event
                        </button>
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        <button
                          onClick={() => dispatch2({ type: ACTIONS.SHOW_ADD_CAT })}

                          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                          Add Category
                        </button>
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                          Button
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

      </div>
      <div className="flex flex-col items-center ">
        <Outlet />

      </div>
    </div>

  );
};
