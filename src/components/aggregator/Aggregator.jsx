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
            <div className="w-48 py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300  dark:bg-gray-700 ">
                <Field type="radio" name="event" value={event.name} />
                {event.name}
            </div>
        );
    });

    const catsData = categories.map(cat => {
        return (

            <div key={cat.id} className="w-48 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 dark:bg-gray-700 dark:border-gray-600 dark:text-white" >
                <Field type="checkbox" name="cats" value={cat.name} />
                {cat.name}
            </div >
        );
    });

    return (
        <>
            <Formik
                initialValues={{
                    cats: [],
                    event: 'as'
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
                        <div aria-labelledby="radio-group" role='group'  >
                            {eventsData}
                        </div >
                        <button type="submit">Submit</button>
                    </Form>
                )}
            </Formik>

        </>
    );
};
