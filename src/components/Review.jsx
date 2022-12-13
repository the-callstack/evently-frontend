import { Fragment, useState } from "react";
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";

export default function Review() {
    const [open, setOpen] = useState(1);

    const handleOpen = (value) => {
        setOpen(open === value ? 0 : value);
    };

    return (<div className="px-20  py-6">
        <Fragment >
            <Accordion open={open === 1}>
                <AccordionHeader onClick={() => handleOpen(1)}>
                    First Review
                </AccordionHeader>
                <AccordionBody>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nulla nemo officiis doloremque, quos laudantium facere magni suscipit? Sapiente inventore quia illum.
                    Voluptas, repellat necessitatibus laudantium id sint odit odio ullam.
                </AccordionBody>
            </Accordion>
            <Accordion open={open === 2}>
                <AccordionHeader onClick={() => handleOpen(2)}>
                    Second Review
                </AccordionHeader>
                <AccordionBody>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nulla nemo officiis doloremque, quos laudantium facere magni suscipit? Sapiente inventore quia illum.
                    Voluptas, repellat necessitatibus laudantium id sint odit odio ullam.
                </AccordionBody>
            </Accordion>
            <Accordion open={open === 3}>
                <AccordionHeader onClick={() => handleOpen(3)}>
                    third Review
                </AccordionHeader>
                <AccordionBody>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nulla nemo officiis doloremque, quos laudantium facere magni suscipit? Sapiente inventore quia illum.
                    Voluptas, repellat necessitatibus laudantium id sint odit odio ullam.
                </AccordionBody>
            </Accordion>
        </Fragment>
    </div>
    );
}