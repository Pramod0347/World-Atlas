import footerContact from "../../api/footer.json";
import { IoCallSharp } from "react-icons/io5";
import { MdPlace } from "react-icons/md";
import { TbMailPlus } from "react-icons/tb";
import { NavLink } from "react-router-dom";

const Footer = () => {
  const footerIcon = {
    MdPlace: <MdPlace />,
    IoCallSharp: <IoCallSharp />,
    TbMailPlus: <TbMailPlus />,
  };

  return (
    <footer className="bg-gray-950 text-gray-200">
      {/* Contact blocks */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {footerContact.map(({ icon, title, details }, i) => (
            <div
              key={i}
              className="flex items-start gap-4 rounded-2xl bg-gray-900/60 p-5 ring-1 ring-gray-800"
            >
              <div className="flex h-12 w-12 flex-none items-center justify-center rounded-xl bg-gray-800 text-xl text-blue-400">
                {footerIcon[icon]}
              </div>
              <div>
                <p className="text-base font-semibold">{title}</p>
                <p className="mt-1 text-sm text-gray-400">{details}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Copyright + menu */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="grid grid-cols-1 items-center gap-4 md:grid-cols-2">
            <div className="text-sm text-gray-400">
              <p className="space-x-1">
                <span>Copyright &copy; 2024, All Rights Reserved</span>
                <a
                  href="https://pramod-347.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="font-medium text-blue-400 hover:text-blue-300 pl-2"
                >
                  Pramod
                </a>
              </p>
            </div>

            <nav className="md:justify-self-end">
              <ul className="flex flex-wrap items-center gap-6 text-sm">
                <li>
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      `transition hover:text-blue-300 ${
                        isActive ? "text-blue-400" : ""
                      }`
                    }
                  >
                    Home
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;