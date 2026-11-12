import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { logo, footerCategories, footerLinks, paymentPartners, appButtons } from "../../data";

const socials = [
  { name: "Facebook", icon: FaFacebookF },
  { name: "Twitter", icon: FaTwitter },
  { name: "Instagram", icon: FaInstagram },
];

export default function Footer() {
  return (
    <footer className="border-t border-gray-300 bg-gray-300">
      <div className="container-x py-12">
        <h6 className="mb-4 font-semibold text-gray-900">Categories</h6>
        <ul className="grid grid-cols-2 gap-x-6 gap-y-2 text-sm sm:grid-cols-3 lg:grid-cols-6">
          {footerCategories.map((category) => (
            <li key={category}>
              <a href="#" className="hover:text-primary">
                {category}
              </a>
            </li>
          ))}
        </ul>

        <hr className="my-8 border-gray-200" />
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {footerLinks.map(({ title, links }) => (
            <div key={title}>
              <h6 className="mb-4 font-semibold text-gray-900">{title}</h6>
              <ul className="space-y-2 text-sm">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="hover:text-primary">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <hr className="my-8 border-gray-200" />
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h6 className="mb-3 text-sm font-semibold text-gray-900">Payment Partners</h6>
            <ul className="flex flex-wrap items-center gap-4">
              {paymentPartners.map(({ id, name, image }) => (
                <li key={id}>
                  <a href="#">
                    <img src={image} alt={name} className="h-6" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h6 className="mb-3 text-sm font-semibold text-gray-900">Get deliveries with FreshCart</h6>
            <ul className="flex flex-wrap items-center gap-4">
              {appButtons.map(({ id, name, image }) => (
                <li key={id}>
                  <a href="#">
                    <img src={image} alt={name} className="h-10" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
  
  
      <div className="border-t border-gray-200">
        <div className="container-x flex flex-col items-center justify-between gap-3 py-4 text-sm md:flex-row">
          <p>© FreshCart. All rights reserved.</p>
          <ul className="flex gap-4">
            {socials.map(({ name, icon: Icon }) => (
              <li key={name}>
                <a href="#" aria-label={name} className="hover:text-primary">
                  <Icon />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
