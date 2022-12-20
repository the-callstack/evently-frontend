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
  SHOW_EVENT: "SHOWEVENT",
  SHOW_ADD_EVENT: "SHOWADDEVENT",
  SHOW_CAT: "SHOWCAT",
  SHOW_ADD_CAT: "SHOWADDCAT",
  SHOW_USERS: "SHOWUSERS",
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
  catForm: false,
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
  
    <div className="min-h-screen mt-4">
      <h1 className="flex flex-col items-center py-10 justify-center text-4xl font-extrabold dark:text-black">
        Admin Dashboard
      </h1>
     
      <div className="flex justify-around my-10 p-4">
        <button
          onClick={() =>
            dispatch2({ type: ACTIONS.SHOW_EVENT, payload: !test })
          }
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-xl"
        >
          Events
        </button>
        <button
          onClick={() => dispatch2({ type: ACTIONS.SHOW_ADD_EVENT })}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-xl"
        >
          Add Event
        </button>
        <button
          onClick={() => dispatch2({ type: ACTIONS.SHOW_ADD_CAT })}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-xl"
        >
          Add Category
        </button>
        <button
          onClick={() => dispatch2({ type: ACTIONS.SHOW_CAT })}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-xl"
        >
          Categories
        </button>
      </div>
      <div className="flex  justify-center my-10">

      {
        state.event && 
        <EventsTable />
      }
      {
        state.eventForm && 
        <AddEventForm />
      }
        {
          state.cat && 
          <CategoriesTable />
        }
      {
        state.catForm && 
        <AddCategoryForm />
      }
      </div>
    </div>
  );
};
