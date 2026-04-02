import { icon } from "@fortawesome/fontawesome-svg-core";
import { faArrowsSpin, faMoneyBill } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons/faPhone";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import {
  faMoneyCheck,
  faSyncAlt,
  faTruckFast,
  faUserTie,
} from "@fortawesome/free-solid-svg-icons";

const Services = () => {
  const ServiceLists = [
    {
      id: 1,
      icon: faMoneyCheck,
      title: "Guaranteed Authenticity",
      description:
        "We source original, brand-new, and certified 'UK-used' gadgets for long-term reliability.",
    },
    {
      id: 3,
      icon: faSyncAlt,
      title: "Swap & Upgrade Flexibility",
      description:
        "Seamless trade-in services to exchange your current device for the latest models.",
    },
    {
      id: 4,
      icon: faTruckFast,
      title: "Nationwide Delivery",
      description:
        "Safe, prompt, and tracked delivery services across Nigeria to your doorstep.",
    },
    {
      id: 5,
      icon: faUserTie,
      title: "Expert Support",
      description:
        "Personalized tech advice to match your specific needs, from gaming to professional office work.",
    },
  ];

  return (
    <div id="services">
      <div className="flex flex-col gap-2 text-center mb-12">
        <h1 className="text-3xl font-bold">Why Choose Us</h1>
        <p className="text-grey">Making your purchase seamless with no delay</p>
      </div>
      <div className="flex flex-col gap-6 lg:flex-row" id="services">
        {ServiceLists.map((service) => {
          return (
            <div
              className="bg-primary hover:bg-secondary transition duration-300 rounded-lg p-6 text-white flex flex-col  gap-4"
              key={service.id}
              data-aos="fade-right"
            >
              <FontAwesomeIcon
                className="text-3xl bg-secondary p-2 w-fit rounded-lg border border-primary "
                icon={service.icon}
              />
              <h2 className="text-2xl font-bold">{service.title}</h2>
              <p className="text-light">{service.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
