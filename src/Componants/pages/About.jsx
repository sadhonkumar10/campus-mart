import React from "react";

import { GiHotMeal, GiPriceTag, GiShop, GiTakeMyMoney } from "react-icons/gi";

import { CiDeliveryTruck } from "react-icons/ci";
import { FaHandHoldingDollar } from "react-icons/fa6";

export default function About() {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 w-9/12 mx-auto mt-40 ">
        <div className="pr-8">
          <img
            src="https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZGVsaXZlcnl8ZW58MHx8MHx8fDA%3D"
            alt=""
            className="h-[736px] w-[646px] rounded-2xl"
          />
        </div>
        <div className="pt-20">
          <h2 className="font-bold text-2xl pb-5">Welcome to Campus-Mart</h2>
          <p className="pb-5">
            {" "}
            Campus-Mart is a reliable digital marketplace built specifically for
            Polytechnic students. With busy schedules full of classes, labs,
            assignments, and projects, managing daily shopping can be difficult.
            Campus-Mart solves that problem by allowing students to order all
            their essentials at affordable prices, with fast delivery straight
            to their hostel, home, or campus. Convenience, time-saving, and
            trusted service are our core priorities.{" "}
          </p>{" "}
          <p className="pb-5">
            {" "}
            We understand how demanding student life can be, which is why we
            offer a smart, simple, and hassle-free shopping experience. Powered
            by modern technology, Campus-Mart ensures every step—from product
            selection to order processing and delivery—is smooth and reliable.
            Quality products, transparent pricing, quick service, and dependable
            support form the foundation of our work. Meeting student needs with
            the right service at the right time is our everyday mission.{" "}
          </p>
          <div className="lg:flex gap-5 hidden lg:block">
            <img
              src="https://images.unsplash.com/photo-1631378297854-185cff6b0986?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YXJkdWlub3xlbnwwfHwwfHx8MA%3D%3D"
              alt=""
              className="w-[193px] h-[236px] "
            />
            <img
              src="https://plus.unsplash.com/premium_photo-1661960643553-ccfbf7d921f6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZWxlY3RyaWNhbHxlbnwwfHwwfHx8MA%3D%3D"
              alt=""
              className="w-[193px] h-[236px] "
            />
            <img
              src="https://images.unsplash.com/photo-1694521787193-9293daeddbaa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGNpdmlsJTIwZW5naW5lZXJpbmd8ZW58MHx8MHx8fDA%3D"
              alt=""
              className="w-[193px] h-[236px] "
            />
          </div>
        </div>
      </div>

      <div className="py-12 bg-white text-gray-700">
        <div>
          <h2 className="font-bold text-3xl text-center mb-10">
            What We Provide?
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
          {/* Card 1 */}
          <div className="text-center border rounded-2xl p-6 shadow hover:shadow-lg transition">
            <GiPriceTag className="text-6xl text-green-600 mx-auto mb-4" />
            <h4 className="text-2xl font-bold mb-2">Best Prices & Offers</h4>
            <p className="text-sm mb-3">
              There are many variations of passages of Lorem <br />
              Ipsum available, but the majority have suffered <br />
              alteration in some form
            </p>
            <a
              href="#"
              className="text-green-600 font-semibold hover:underline"
            >
              Read more
            </a>
          </div>

          {/* Card 2 */}
          <div className="text-center border rounded-2xl p-6 shadow hover:shadow-lg transition">
            <FaHandHoldingDollar className="text-6xl text-green-600 mx-auto mb-4" />
            <h4 className="text-2xl font-bold mb-2">Wide Assortment</h4>
            <p className="text-sm mb-3">
              There are many variations of passages of Lorem <br />
              Ipsum available, but the majority have suffered <br />
              alteration in some form
            </p>
            <a
              href="#"
              className="text-green-600 font-semibold hover:underline"
            >
              Read more
            </a>
          </div>

          {/* Card 3 */}
          <div className="text-center border rounded-2xl p-6 shadow hover:shadow-lg transition">
            <CiDeliveryTruck className="text-6xl text-green-600 mx-auto mb-4" />
            <h4 className="text-2xl font-bold mb-2">Free Delivery</h4>
            <p className="text-sm mb-3">
              There are many variations of passages of Lorem <br />
              Ipsum available, but the majority have suffered <br />
              alteration in some form
            </p>
            <a
              href="#"
              className="text-green-600 font-semibold hover:underline"
            >
              Read more
            </a>
          </div>

          {/* Card 4 */}
          <div className="text-center border rounded-2xl p-6 shadow hover:shadow-lg transition">
            <GiShop className="text-6xl text-green-600 mx-auto mb-4" />
            <h4 className="text-2xl font-bold mb-2">Easy Returns</h4>
            <p className="text-sm mb-3">
              There are many variations of passages of Lorem <br />
              Ipsum available, but the majority have suffered <br />
              alteration in some form
            </p>
            <a
              href="#"
              className="text-green-600 font-semibold hover:underline"
            >
              Read more
            </a>
          </div>

          {/* Card 5 */}
          <div className="text-center border rounded-2xl p-6 shadow hover:shadow-lg transition">
            <GiHotMeal className="text-6xl text-green-600 mx-auto mb-4" />
            <h4 className="text-2xl font-bold mb-2">100% Satisfaction</h4>
            <p className="text-sm mb-3">
              There are many variations of passages of Lorem <br />
              Ipsum available, but the majority have suffered <br />
              alteration in some form
            </p>
            <a
              href="#"
              className="text-green-600 font-semibold hover:underline"
            >
              Read more
            </a>
          </div>

          {/* Card 6 */}
          <div className="text-center border rounded-2xl p-6 shadow hover:shadow-lg transition">
            <GiTakeMyMoney className="text-6xl text-green-600 mx-auto mb-4" />
            <h4 className="text-2xl font-bold mb-2">Great Daily Deal</h4>
            <p className="text-sm mb-3">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form
            </p>
            <a
              href="#"
              className="text-green-600 font-semibold hover:underline"
            >
              Read more
            </a>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 w-9/12 mx-auto gap-4">
        <div>
          <img
            src="https://plus.unsplash.com/premium_photo-1665203422028-68d636f2c944?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cGFydG5lcnxlbnwwfHwwfHx8MA%3D%3D"
            alt=""
            className=" rounded-2xl"
          />
        </div>
        <div className="pt-10 border border-gray-300 bg-black/4 rounded-2xl p-4">
          <h5 className="font-bold text-gray-400 pb-5">Our performance</h5>
          <h2 className="text-3xl font-semibold pb-5">
            Your Partner for e- <br />
            commerce grocery <br />
            solution
          </h2>
          <p>
            Ed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto
          </p>
          <p className="pt-5">
            Pitatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo
            enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            fugit, sed quia
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 w-9/12 mx-auto pt-8 gap-4">
        <div className="border border-gray-300 bg-black/4 rounded-2xl p-4">
          <h4 className="font-bold text-2xl">Who we are</h4>
          <p>
            Volutpat diam ut venenatis tellus in metus. Nec dui nunc mattis enim
            ut tellus eros donec ac odio orci ultrices in. ellus eros donec ac
            odio orci ultrices in.
          </p>
        </div>
        <div className="border border-gray-300 bg-black/4 rounded-2xl p-4">
          <h4 className="font-bold text-2xl">Our history</h4>
          <p>
            Volutpat diam ut venenatis tellus in metus. Nec dui nunc mattis enim
            ut tellus eros donec ac odio orci ultrices in. ellus eros donec ac
            odio orci ultrices in.
          </p>
        </div>
        <div className="border border-gray-300 bg-black/4 rounded-2xl p-4">
          <h4 className="font-bold text-2xl">Our mission</h4>
          <p>
            Volutpat diam ut venenatis tellus in metus. Nec dui nunc mattis enim
            ut tellus eros donec ac odio orci ultrices in. ellusb eros donec ac
            odio orci ultrices in.
          </p>
        </div>
      </div>

      <div className=" w-9/12 mx-auto">
        <h2 className="font-bold text-3xl text-center pt-15 pb-15">Our Team</h2>
        <div className=" grid grid-cols-1 lg:grid-cols-2">
          <div className="pr-8 ">
            <p className="text-blue-500 font-bold">Our Team</p>
            <h3 className="text-3xl pb-5">Meet Our Expert Team</h3>
            <p>
              Proin ullamcorper pretium orci. Donec necscele risque leo. Nam
              massa dolor imperdiet neccon sequata congue idsem. Maecenas
              malesuada faucibus finibus.
            </p>
            <p className="pt-9 pb-9">
              Proin ullamcorper pretium orci. Donec necscele risque leo. Nam
              massa dolor imperdiet neccon sequata congue idsem. Maecenas
              malesuada faucibus finibus.
            </p>
            <button className="py-2 px-3 bg-blue-500 text-white rounded-2xl hover:bg-transparent hover:text-black transform duration-500">
              View All Members
            </button>
          </div>
          <div className="grid grid-cols-2  pt-15">
            <div className="pr-5">
              <img
                src="https://media.istockphoto.com/id/1435220822/photo/african-american-software-developer.jpg?s=612x612&w=0&k=20&c=JESGRQ2xqRH9ZcJzvZBHZIZKVY8MDejBSOfxeM-i5e4="
                alt=""
                className="rounded-2xl  "
              />
            </div>
            <div className="pr-5">
              <img
                src="https://media.istockphoto.com/id/1552881556/photo/tablet-designer-and-serious-woman-research-in-business-startup-office-at-night-on-deadline.jpg?s=612x612&w=0&k=20&c=VuJg-jHVopY6qqgYtHgO7PG5Mdk74rbV7cdMxEf8950="
                alt=""
                className="rounded-2xl hidden lg:block"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="w-9/12 mx-auto pt-20 pb-20">
        <img src="/imgabout/Footer.png" alt="" />
      </div>
    </>
  );
}
