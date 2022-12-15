import React from 'react';
import { useSelector } from 'react-redux';
import { selectEventCatState } from '../../features/EventCat/EventCatSlice';
import { Formik, Field, Form } from 'formik';

export default function Aggregator() {
    const { events, categories } = useSelector(selectEventCatState);

    const submitForm = (val) => {
        console.log(val);
    };

    const eventsData = events.map(event => {
        return (
            <div className="w-48 py-3  pl-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300  dark:bg-gray-700 ">
                <Field type="radio" name="event" value={event.name} />
                <p className='inline p-4'>{event.name}</p>
            </div>
        );
    });

    const catsData = categories.map(cat => {
        return (

            <div key={cat.id} className="w-48 p-3 text-sm font-medium  text-gray-900 bg-white rounded-lg border border-gray-200 dark:bg-gray-700 dark:border-gray-600 dark:text-white" >
                <Field type="checkbox" name="cats" value={cat.name} />
                <p className='inline p-4'>{cat.name}</p>
            </div >
        );
    });

    return (
        <div className='' >
            <Formik
                initialValues={{
                    cats: [],
                    event: 'as',
                    attendance: 0
                }}
                onSubmit={(values) => {
                    submitForm(values);
                }}
            >
                {({ values }) => (
                    <Form>
                        <div id="checkbox-group" className="mb-4 font-semibold text-gray-900 dark:text-white dark:bg-gray-700">Categories</div>
                        <div role="group" aria-labelledby="checkbox-group" >
                            {catsData}
                        </div>
                        <br />
                        <div id="radio-group" className="mb-4 font-semibold text-gray-900 dark:text-white dark:bg-gray-700">Events</div>
                        <div aria-labelledby="radio-group" role='group' className='mb-4' >
                            {eventsData}
                        </div >
                        <div className="mb-4 font-semibold text-gray-900 dark:text-white dark:bg-gray-700 p-3">
                            <p className='inline p-4'> Attendance</p>
                            <Field type='range' name='attendance' min="0" max="1000" />
                            <Field type='number' name='attendance' value={values.attendance} />
                            <div className="mb-4 inline mx-3 font-semibold text-gray-900 dark:text-white dark:bg-gray-700">{values.attendance}</div>
                        </div>
                        <button type="submit">Submit</button>
                    </Form>
                )}
            </Formik>

        </div>
    );
};
