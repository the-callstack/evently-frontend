import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteEvent, getAllEvents, selectEventState } from '../../features/events/EventSlice';
import { AlertTempo } from '../alert/AlertTempo';

export const EventsTable = () => {
    const { events } = useSelector(selectEventState);
    const dispatch = useDispatch();
  const [edit, setEdit] = useState(false);

    const handleDelete = (id) => {
      const payload = {
        id: parseInt(id),
      };
      dispatch(deleteEvent(payload));
    };

    useEffect(() => {
      dispatch(getAllEvents());
    },[events])
  
    return (
      <div className='w-[50%]'>
        <div className="flex flex-col w-[100%]">
          <div className="overflow-x-auto w-[100%]">
            <div className="p-1.5 w-[100%] inline-block align-middle">
              <div className="overflow-hidden border rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                      >
                        events Name
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
                      >
                        Edit
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
                      >
                        Delete
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {events.events?.map((event, index) => {
                      return (
                        <tr
                          //   onClick={() => handleClick(event)}
                          key={index}
                        >
                          <td className="px-6 py-4 hover:cursor-pointer text-sm font-medium text-gray-800 whitespace-nowrap">
                            {event.eventType}{" "}
                          </td>
                          <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                            <Link
                              // onClick={() => handleUpdate(event)}
                              className="text-green-500 hover:text-green-700"
                            >
                              Edit
                            </Link>
                          </td>
                          <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                            <Link
                              onClick={() => {
                                setEdit(true)
                                handleDelete(event.id)}
                              }
                              className="text-red-500 hover:text-red-700"
                              href="#sss"
                            >
                              Delete
                            </Link>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      <AlertTempo show={edit} setEdit={setEdit} msg='Event has been deleted successfully.' />

      </div>
    );
}
