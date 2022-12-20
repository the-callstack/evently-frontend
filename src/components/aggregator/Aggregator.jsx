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
import PackageResult from "./PackageResult";

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
        className="w-48 p-3 text-sm font-medium text-gray-900 shadow-inner"
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
        className=" w-48 p-3 text-sm font-medium text-gray-900 mb-2 bg-white rounded-lg border border-gray-200 shadow-inner"
      >
        <Field
          type="checkbox"
          className="checked:bg-blue-800"
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
    <div className="flex flex-start gap-8">
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
          <div className="flex ml-16 justify-start w-auto my-10 h-auto">
            <Form className="w-full p-5 shadow-xl rounded-lg  ">
              <div
                id="checkbox-group"
                className="mb-4 flex flex-col justify-center pl-5 text-lg m-3 font-semibold text-gray-900 p-5 shadow-md"
              >
                Categories
              </div>
              <div className="pl-5" role="group" aria-labelledby="checkbox-group">
                {catsData}
              </div>
              <br />
              <div
                id="radio-group"
                className="mb-4 flex flex-col justify-center pl-5 text-lg  m-3 font-semibold text-gray-900 p-4 shadow-md"
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
              <div className="mb-4 m-3 p-3 font-semibold text-gray-900 shadow-md pl-4">
                <p className="inline p-4"> Attendance</p>
                <Field type="range" name="attendance" min="0" max="1000" />
                <Field
                  type="number"
                  className="text-black rounded-xl hidden"
                  name="attendance"
                  value={values.attendance}
                />
                <div className="mb-4 inline mx-3 font-semibold text-gray-900 ">
                  {values.attendance}
                </div>
              </div>
              <div className="flex justify-center pb-5">
                <button
                  type="submit"
                  className="p-3 w-40 bg-gray-100 rounded-lg text-gray-900 hover:shadow-inner hover:translate-x-1 hover:text-gray-800 shadow-md"
                >
                  Get your package !
                </button>
              </div>
            </Form>
          </div>
        )}
      </Formik>
      <PackageResult />
    </div>
  );
}
