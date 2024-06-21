// import { useState } from "react";
// import "./Pricing.css";
// import PropTypes from "prop-types";

// const frequencies = [
//   { id: "1", value: "1", label: "Monthly", priceSuffix: "/month" },
//   { id: "2", value: "2", label: "Annually", priceSuffix: "/year" },
// ];

// const tiers = [
//   {
//     name: "Free",
//     id: "0",
//     href: "https://buy.stripe.com/14kaFH2hWcmzd6E144",
//     price: { 1: "$0", 2: "$0" },
//     discountPrice: { 1: "", 2: "" },
//     description: `Ideal for a day to day usage.`,
//     features: [
//       `Unlimited tasks`,
//       `Real-time notification system`,
//       `Possibility to edit`,
//     ],
//     featured: false,
//     highlighted: false,
//     soldOut: false,
//     cta: `Current plan`,
//   },
//   {
//     name: "Pro",
//     id: "1",
//     href: "https://buy.stripe.com/14kaFH2hWcmzd6E144",
//     price: { 1: "€10", 2: "€100" },
//     discountPrice: { 1: "", 2: "" },
//     description: `When you grow, need more power and flexibility.`,
//     features: [
//       `All in the free plan plus:`,
//       `Customizable templates`,
//       `Integration w/ 3rd-party apps`,
//       `Advanced user permissions`,
//     ],
//     featured: false,
//     highlighted: true,
//     soldOut: false,
//     cta: `Get started`,
//   },
// ];

// const CheckIcon = ({ className }) => (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     viewBox="0 0 24 24"
//     fill="currentColor"
//     className={`w-6 h-6 ${className}`}
//   >
//     <path
//       fillRule="evenodd"
//       d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
//       clipRule="evenodd"
//     />
//   </svg>
// );

// CheckIcon.propTypes = {
//   className: PropTypes.string,
// };

// CheckIcon.defaultProps = {
//   className: "", // Provide a default value if 'className' is not a required prop
// };

// const cn = (...args) => args.filter(Boolean).join(" ");

// export default function PricingPage() {
//   const [frequency, setFrequency] = useState(frequencies[0]);
//   const bannerText = "";

//   return (
//     <div className={cn("flex flex-col w-full items-center", "fancyOverlay")}>
//       <div className="w-full flex flex-col items-center">
//         <div className="mx-auto max-w-7xl px-6 lg:px-8 flex flex-col items-center">
//           <div className="w-full lg:w-auto mx-auto max-w-4xl lg:text-center">
//             <h1 className="text-black dark:text-white text-4xl font-semibold max-w-xs sm:max-w-none md:text-6xl !leading-tight">
//               Pricing
//             </h1>
//             <p className="text-black dark:text-white mt-6 md:text-xl lg:text-center max-w-prose">
//               Choose the plan that suits you best
//             </p>
//           </div>

//           {bannerText && (
//             <div className="w-full lg:w-auto flex justify-center my-4">
//               <p className="w-full px-4 py-3 text-xs bg-teal-100 text-black dark:bg-teal-300/30 dark:text-white/80 rounded-xl">
//                 {bannerText}
//               </p>
//             </div>
//           )}

//           {frequencies.length > 1 && (
//             <div className="mt-16 flex justify-center">
//               <div
//                 role="radiogroup"
//                 className="grid gap-x-1 rounded-full p-1 text-center text-xs font-semibold leading-5 bg-white dark:bg-black ring-1 ring-inset ring-gray-200/30 dark:ring-gray-800"
//                 style={{
//                   gridTemplateColumns: `repeat(${frequencies.length}, minmax(0, 1fr))`,
//                 }}
//               >
//                 <p className="sr-only">Payment frequency</p>
//                 {frequencies.map((option) => (
//                   <label
//                     className={cn(
//                       frequency.value === option.value
//                         ? "bg-teal-500/90 text-white dark:bg-teal-900/70 dark:text-white/70"
//                         : "bg-transparent text-gray-500 hover:bg-teal-500/10",
//                       "cursor-pointer rounded-full px-2.5 py-2 transition-all"
//                     )}
//                     key={option.value}
//                     htmlFor={option.value}
//                   >
//                     {option.label}
//                     <button
//                       value={option.value}
//                       id={option.value}
//                       className="hidden"
//                       role="radio"
//                       aria-checked={frequency.value === option.value}
//                       onClick={() => {
//                         const newFrequency = frequencies.find(
//                           (f) => f.value === option.value
//                         );
//                         if (newFrequency) {
//                           setFrequency(newFrequency);
//                         }
//                       }}
//                     >
//                       {option.label}
//                     </button>
//                   </label>
//                 ))}
//               </div>
//             </div>
//           )}
//           <div
//             className={cn(
//               "isolate mx-auto mt-4 mb-28 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none select-none",
//               tiers.length === 2 ? "lg:grid-cols-2" : "",
//               tiers.length === 3 ? "lg:grid-cols-3" : ""
//             )}
//           >
//             {tiers.map((tier) => (
//               <div
//                 key={tier.id}
//                 className={cn(
//                   tier.featured
//                     ? "!bg-gray-900 ring-gray-900 dark:!bg-gray-100 dark:ring-gray-100"
//                     : "free-tier",
//                   "max-w-xs ring-1 rounded-3xl p-8 xl:p-10",
//                   tier.highlighted ? "fancyGlassContrast" : ""
//                 )}
//               >
//                 <h3
//                   id={tier.id}
//                   className={cn(
//                     tier.featured
//                       ? "text-white dark:text-black"
//                       : "text-black dark:text-white",
//                     "text-2xl font-bold tracking-tight"
//                   )}
//                 >
//                   {tier.name}
//                 </h3>
//                 <p
//                   className={cn(
//                     tier.featured
//                       ? "text-gray-300 dark:text-gray-500"
//                       : "text-gray-600 dark:text-gray-400",
//                     "mt-4 text-sm leading-6"
//                   )}
//                 >
//                   {tier.description}
//                 </p>
//                 <p className="mt-6 flex items-baseline gap-x-1">
//                   <span
//                     className={cn(
//                       tier.featured
//                         ? "text-white dark:text-black"
//                         : "text-black dark:text-white",
//                       "text-4xl font-bold tracking-tight",
//                       tier.discountPrice && tier.discountPrice[frequency.value]
//                         ? "line-through"
//                         : ""
//                     )}
//                   >
//                     {typeof tier.price === "string"
//                       ? tier.price
//                       : tier.price[frequency.value]}
//                   </span>
//                   <span
//                     className={cn(
//                       tier.featured
//                         ? "text-white dark:text-black"
//                         : "text-black dark:text-white"
//                     )}
//                   >
//                     {typeof tier.discountPrice === "string"
//                       ? tier.discountPrice
//                       : tier.discountPrice[frequency.value]}
//                   </span>
//                   {typeof tier.price !== "string" && (
//                     <span
//                       className={cn(
//                         tier.featured
//                           ? "text-gray-300 dark:text-gray-500"
//                           : "text-gray-600 dark:text-gray-400",
//                         "text-sm font-semibold leading-6"
//                       )}
//                     >
//                       {frequency.priceSuffix}
//                     </span>
//                   )}
//                 </p>
//                 <a
//                   href={tier.href}
//                   aria-describedby={tier.id}
//                   className={cn(
//                     "flex mt-6 shadow-sm",
//                     tier.soldOut ? "pointer-events-none" : ""
//                   )}
//                 >
//                   <button
//                     disabled={tier.soldOut}
//                     className={cn(
//                       "w-full inline-flex items-center justify-center font-medium ring-offset-background hover:opacity-80 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-black dark:text-white h-12 rounded-md px-6 sm:px-10 text-md",
//                       tier.featured || tier.soldOut ? "grayscale" : "",
//                       !tier.highlighted && !tier.featured
//                         ? "bg-gray-100 dark:bg-gray-600 border border-solid border-gray-300 dark:border-gray-800"
//                         : "bg-teal-300/70 text-teal-foreground hover:bg-teal-400/70 dark:bg-teal-700 dark:hover:bg-teal-800/90",
//                       tier.featured ? "!bg-gray-100 dark:!bg-black" : ""
//                     )}
//                   >
//                     {tier.soldOut ? "Sold out" : tier.cta}
//                   </button>
//                 </a>

//                 <ul
//                   className={cn(
//                     tier.featured
//                       ? "text-gray-300 dark:text-gray-500"
//                       : "text-gray-700 dark:text-gray-400",
//                     "mt-8 space-y-3 text-sm leading-6 xl:mt-10"
//                   )}
//                 >
//                   {tier.features.map((feature) => (
//                     <li key={feature} className="flex gap-x-3">
//                       <CheckIcon
//                         className={cn(
//                           tier.featured ? "text-white dark:text-black" : "",
//                           tier.highlighted ? "text-teal-500" : "text-gray-500",
//                           "h-6 w-5 flex-none"
//                         )}
//                         aria-hidden="true"
//                       />
//                       {feature}
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import "./Pricing.css"; // Assuming your CSS is correctly set up for React
import { Link } from "react-router-dom";

const Pricing = () => {
  const plans = [
    {
      title: "Free",
      price: "$0/month",
      features: [
        { text: "Unlimited Private Projects", included: false },
        { text: "Unlimited tasks", included: false },
        { text: "Free support", included: false },
      ],
      buttonLabel: "Current plan",
    },

    {
      title: "Pro",
      price: "€10/month",
      features: [
        { text: "All in the free plan plus:", strong: true },
        { text: "Customizable templates", included: false },
        { text: "Integration w/ 3rd-party apps", included: false },
        { text: "Advanced user permissions", included: false },
      ],
      buttonLabel: "Subscribe",
    },
  ];

  return (
    <section className="pricing py-5">
      <div className="row">
        {plans.map((plan) => (
          <div className="col-lg-4" key={plan.title}>
            <div className="cardprice mb-5 mb-lg-0">
              <div className="card-body">
                <h5 className="card-title text-muted text-uppercase text-center">
                  {plan.title}
                </h5>
                <h6 className="card-price text-center">
                  {plan.price}
                  <span className="period"></span>
                </h6>
                <hr />
                <ul className="fa-ul">
                  {plan.features.map((feature, index) => (
                    <li
                      key={index}
                      className={!feature.included ? "text-muted" : ""}
                    >
                      <span className="fa-li">
                        <i
                          className={`fas ${
                            feature.included !== false ? "fa-check" : "fa-times"
                          }`}
                        ></i>
                      </span>
                      {feature.strong ? (
                        <strong>{feature.text}</strong>
                      ) : (
                        feature.text
                      )}
                    </li>
                  ))}
                </ul>
                <div>
                  <button className="d-grid">
                    <Link
                      to="https://buy.stripe.com/14kaFH2hWcmzd6E144"
                      className="btn btn-primary text-uppercase"
                      target="_blank"
                    >
                      {plan.buttonLabel}
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
