import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Field, Form } from "formik";
import {
  getAllCategories,
  selectCategoryState,
} from "../../features/categories/categorySlice";
import {
  getAllEvents,
  selectEventState,
} from "../../features/events/EventSlice";
import { createPackage } from "../../features/packageSlice/PackageSlice";
import { selectPackageState } from "../../features/packageSlice/PackageSlice";

export default function Aggregator() {
  const { category } = useSelector(selectCategoryState);
  const { events } = useSelector(selectEventState);
  const dispatch = useDispatch();
  const { eventPackage } = useSelector(selectPackageState);
  const submitForm = (val) => {
    const newCat = val.categories.map((item) => parseInt(item));
    val.categories = [...newCat];
    val.eventId = parseInt(val.eventId);
    dispatch(createPackage(val));
  };

  const eventsData = events.events?.map((event) => {
    return (
      <div
        key={event.id}
        className="w-48 py-3  pl-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300  dark:bg-gray-700 "
      >
        <Field type="radio" name="eventId" value={parseInt(event.id)} />
        <p className="inline p-4">{event.eventType}</p>
      </div>
    );
  });
  const catsData = category.categories?.map((cat) => {
    return (
      <div
        key={cat.id}
        className="w-48 p-3 text-sm font-medium text-gray-900 mb-2 bg-white rounded-lg border border-gray-200 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
      >
        <Field
          type="checkbox"
          className=""
          name="categories"
          value={parseInt(cat.id)}
        />
        <p className="inline p-4">{cat.name}</p>
      </div>
    );
  });
  useEffect(() => {
    dispatch(getAllCategories());
    dispatch(getAllEvents());
  }, []);

  return (
    <Formik
      initialValues={{
        categories: [],
        eventId: 0,
        attendance: 0,
      }}
      onSubmit={(values) => {
        submitForm(values);
      }}
    >
      {({ values }) => (
        <div className="flex justify-center my-10 min-h-screen">
          <Form className="w-[50%] border border-b-2 rounded-lg bg-gray-800 ">
            <div
              id="checkbox-group"
              className="mb-4 flex flex-col justify-center pl-5 text-lg h-10 rounded-lg font-semibold text-gray-900 dark:text-white dark:bg-gray-700"
            >
              Categories
            </div>
            <div className="pl-5" role="group" aria-labelledby="checkbox-group">
              {catsData}
            </div>
            <br />
            <div
              id="radio-group"
              className="mb-4 flex flex-col justify-center pl-5 text-lg h-10 rounded-lg font-semibold text-gray-900 dark:text-white dark:bg-gray-700"
            >
              Events
            </div>
            <div
              aria-labelledby="radio-group"
              role="group"
              className="mb-4 pl-5"
            >
              {eventsData}
            </div>
            <div className="mb-4 rounded-xl  font-semibold text-gray-900 dark:text-white dark:bg-gray-700 pl-4">
              <p className="inline p-4"> Attendance</p>
              <Field type="range" name="attendance" min="0" max="1000" />
              <Field
                type="number"
                className="text-black rounded-xl hidden"
                name="attendance"
                value={values.attendance}
              />
              <div className="mb-4 inline mx-3 font-semibold text-gray-900 dark:text-white dark:bg-gray-700">
                {values.attendance}
              </div>
            </div>
            <div className="flex justify-center pb-5">
              <button
                type="submit"
                className="p-3 w-40 bg-blue-800 rounded-lg text-gray-200 hover:text-gray-400"
              >
                Get your package !
              </button>
            </div>
          </Form>
        </div>
      )}
    </Formik>
  );
}
