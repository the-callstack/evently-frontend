import React from 'react'
import AboutUsCard from './AboutUsCard';

export default function AboutUs() {
    const data = [
        {
            id: 1,
            img: "https://ca.slack-edge.com/TNGRRLUMA-U03LPQ166EN-f658e4421226-512",
            alt: "Hodaifa",
            name: "Hodaifa R. Zawahreh",
            phone: '077',
            email: "emanriziq@gmail.com",
            github: "https://github.com/EmanRiziq",
            linkedin: "www.linkedin.com/in/eman-riziq"
        },
        {
            id: 2,
            img: "https://ca.slack-edge.com/TNGRRLUMA-U03L96DEHFZ-1ecfe274ac1a-512",
            alt: "Fahed",
            name: "Fahad Al-Rimawe",
            phone: '077',
            email: "emanriziq@gmail.com",
            github: "https://github.com/EmanRiziq",
            linkedin: "www.linkedin.com/in/eman-riziq"
        },
        {
            id: 3,
            img: "https://ca.slack-edge.com/TNGRRLUMA-U03LLSD20JH-a5c35a69525c-512",
            alt: "Abdallah",
            name: "Abdallah Smadi",
            phone: '077',
            email: "emanriziq@gmail.com",
            github: "https://github.com/EmanRiziq",
            linkedin: "www.linkedin.com/in/eman-riziq"
        }, {
            id: 4,
            img: "https://ca.slack-edge.com/TNGRRLUMA-U03MDGVER40-59d28dff618d-512",
            alt: "Eyad ",
            name: "Eyad Mansour",
            phone: '077',
            email: "emanriziq@gmail.com",
            github: "https://github.com/EmanRiziq",
            linkedin: "www.linkedin.com/in/eman-riziq"
        }, {
            id: 5,
            img: "https://ca.slack-edge.com/TNGRRLUMA-U03L96CU2LF-9bb13171bab5-512",
            alt: "Eman",
            name: "Eman Riziq",
            phone: '0785959942',
            email: "emanriziq@gmail.com",
            github: "https://github.com/EmanRiziq",
            linkedin: "www.linkedin.com/in/eman-riziq"
        },
    ]
    return (
      <>
        <div className="container  pb-24 mx-auto ">
          <section className=" text-gray-800  ">
            <div
              className="relative overflow-hidden bg-no-repeat bg-cover"
              style={{
                backgroundPosition: "50%",
                backgroundImage:
                  'url("https://images.pexels.com/photos/2526105/pexels-photo-2526105.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
                height: "300px",
              }}
            ></div>
            <div className="container text-gray-800 px-4 md:px-32  ">
              <div
                className="block rounded-lg shadow-lg py-10 md:py-12 px-4 md:px-6  "
                style={{
                  marginTop: "-100px",
                  background: "hsla(0, 0%, 100%, 0.8)",
                  backdropFilter: "blur(30px)",
                }}
              >
                <div className=" justify-items-center grid grid-cols-3 gap-16   w-full  px-16 pt-12 pb-4">
                  {data.map((data) => (
                    <AboutUsCard
                      key={data.id}
                      img={data.img}
                      alt={data.alt}
                      name={data.name}
                      phone={data.phone}
                      email={data.email}
                      github={data.github}
                      linkedin={data.linkedin}
                    />
                  ))}
                </div>
                {/* <AboutUsCard/> */}
              </div>
            </div>
          </section>
        </div>
      </>
    );
}
