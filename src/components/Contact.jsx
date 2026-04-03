import {
  faEnvelope,
  faLocation,
  faLocationDot,
  faMailReply,
  faPhone,
  faStopwatch,
  faX,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Img from "../assets/contact-img.jpg";
import {
  fa11ty,
  faFacebook,
  faFacebookF,
  faInstagram,
  faTiktok,
  faTwitter,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  return (
    <div
      className="flex flex-col gap-12 lg:flex-row lg:justify-between items-center"
      id="contact-us"
    >
      <div className="flex flex-col gap-3 lg:w-[80%]" data-aos="fade-right">
        <h3 className="text-4xl font-bold">Contact Us</h3>
        <p className="text-lg text-grey">
          Ready to upgrade? Visit us at our branches in
          Ibadan, or send us a message on WhatsApp. You can also
          explore our latest arrivals on Instagram. Let’s get you
          the perfect gadget today!
        </p>
        <div className="grid  md:grid-cols-2 gap-4">
          <div className="flex items-center gap-2">
            <FontAwesomeIcon
              icon={faPhone}
              className="text-3xl bg-primary p-2 rounded-lg text-white "
            />
            <div>
              <h3 className="text-2xl font-bold mb-1">Call Phone</h3>
              <p className="text-grey">+234 8065584046</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <FontAwesomeIcon
              icon={faEnvelope}
              className="text-3xl bg-primary p-2 rounded-lg text-white "
            />
            <div>
              <h3 className="text-2xl font-bold mb-1">Send Email</h3>
              <p className="text-grey">ogababson@gmail.com</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <FontAwesomeIcon
              icon={faLocationDot}
              className="text-3xl bg-primary p-2 rounded-lg text-white "
            />
            <div>
              <h3 className="text-2xl font-bold mb-1">Address</h3>
              <p className="text-grey">
                Challenge, Opposite Globalcom Building, Ibadan, Oyo, Nigeria
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <FontAwesomeIcon
              icon={faStopwatch}
              className="text-3xl bg-primary p-2 rounded-lg text-white "
            />
            <div>
              <h3 className="text-2xl font-bold mb-1">Working Days</h3>
              <p className="text-grey">Mon - Sat</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-full">
        <img src={Img} alt="" className="w-full object-cover rounded-lg" />
      </div>
    </div>
  );
};

export default Contact;
