import React from 'react'

export default function AboutUs2() {
  return (
    <>
      {" "}
      <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4 bg-red-500">
        <div className=" to-blue-500">
          {/* <div className="w-full lg:w-5/12 flex flex-col justify-center bg-yellow-300">
            <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4 bg-green-300">
              About Us
            </h1>
            <p className="font-normal text-base leading-6 text-gray-600">
              IF YOU HAVE A BIG THING COMING UP; YOUR WEDDING, A LOVED ONE
              BIRTHDAY, OR A BIG CONFERENCE FOR YOUR BUSINESS! YOU HAVE TO SPEND
              WEEKS PLANNING FOR THE EVENT! WHERE TO FIND ENOUGH CHAIRS? WHERE
              TO GET THE BEST FOOD FOR THE GUESTS? DON'T WORRY! WE ARE HERE TO
              HELP!
            </p>
          </div> */}
          <div className="w-full lg:w-8/12 bg-yellow-300">
            <img
              // className="w-full h-full"
              src="https://images-ext-2.discordapp.net/external/Ei2jdjpeNG2OU80j5FQIDwi5Y0HMvuGUVtK_4Y8PisA/%3Fv%3D1030/https/screenshots.visme.co/3b/04/9a/1a/23f192562d198168897fcec9763a2d80_f.jpg"
              alt="A group of People"
            />
          </div>
        </div>
        <div className="flex lg:flex-row flex-col justify-between gap-8 pt-12">
          <div className="w-full lg:w-5/12 flex flex-col justify-center">
            <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">
              Our Story
            </h1>
            <p className="font-normal text-base leading-6 text-gray-600">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum.In the first place we have granted to
              God, and by this our present charter confirmed for us and our
              heirs forever that the English Church shall be free, and shall
              have her rights entire, and her liberties inviolate; and we will
              that it be thus observed; which is apparent from
            </p>
          </div>
          <div className="w-full lg:w-8/12 lg:pt-8">
            <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:gap-4 shadow-lg rounded-md">
            
            
           
              <div className="p-4 pb-6 flex justify-center flex-col items-center">
                <img
                  className="md:block hidden"
                  src="https://ca.slack-edge.com/TNGRRLUMA-U03L96CU2LF-9bb13171bab5-512"
                  alt="Eman image"
                />
                <img
                  className="md:hidden block"
                  src="https://ca.slack-edge.com/TNGRRLUMA-U03L96CU2LF-9bb13171bab5-512"
                  alt="Eman image"
                />
                <p className="font-medium text-xl leading-5 text-gray-800 mt-4">
                  Eman
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
