import { useSelector } from 'react-redux';
import { Outlet } from "react-router-dom";
import { selectEventState } from '../features/events/EventSlice';
import { ItemCard } from './itemCard/ItemCard';


export default function EventProduct() {
    const { events } = useSelector(selectEventState)


    return (
        <div>
            {/* {console.log(event.eventsitems)} */}
            <div className="flex justify-center gap-10 pt-10 pl-10">
                <div>
                </div>
                <div className="grid grid-cols-3 gap-5 w-full h-60 pr-10">
                    {/* {
                       events.eventsitems?.map(item => {
                            return (
                                <ItemCard key={item.id} item={item} />
                            )
                        })
                    } */}
                </div>
            </div>
        </div>
    );
}




