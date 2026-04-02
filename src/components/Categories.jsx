import {
  faAudible,
  faWatchmanMonitoring,
} from "@fortawesome/free-brands-svg-icons";
import {
  faDesktop,
  faGamepad,
  faLaptop,
  faMobile,
  faMobilePhone,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { faMobileAndroid } from "@fortawesome/free-solid-svg-icons/faMobileAndroid";
import { faStopwatch } from "@fortawesome/free-solid-svg-icons/faStopwatch";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Img1 from "../assets/cat-1.jpg";
import Img2 from "../assets/cat-2.jpg";
import Img3 from "../assets/cat-3.jpg";
import Img4 from "../assets/cat-4.jpg";
import Img5 from "../assets/cat-5.jpg";

const Categories = () => {
  const CategoryLists = [
  {
    id: 1,
    name: "Mobile Phones",
    img: Img1,
  },
  {
    id: 2,
    name: "Laptops & Computing",
    img: Img2,
  },
  {
    id: 3,
    name: "Tablets",
    img: Img3,
  },
  {
    id: 4,
    name: "Mobile Accessories",
    img: Img4,
  },
  {
    id: 5,
    name: "Computing Accessories",
    img: Img5,
  },
  {
    id: 6,
    name: "Audio & Wearables",
    img: Img1,
  }
];

  return (
    <div>
      <div className="flex flex-col gap-2 text-center mb-12">
        <h1 className="text-3xl font-bold">Top Collections</h1>
        <p className="text-grey">
          Check out our full product collections from store
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {CategoryLists.map((service) => {
          return (
            <div
              className="relative flex justify-center"
              key={service.id}
              data-aos="fade-right"
            >
              <img
                src={service.img}
                alt=""
                className="rounded-lg h-80 w-full object-cover"
              />
              <h2 className="absolute bg-faintbtn font-bold text-primary w-[90%] bottom-5 text-xl p-4 text-center rounded-lg ont-medium">
                {service.name}
              </h2>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Categories;
