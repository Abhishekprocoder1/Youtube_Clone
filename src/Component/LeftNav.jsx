import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../Context/Contextapi";
import { categories } from "../Utlits/Constance";
import LeftNavMenuItem from "./LeftNavMenuItem";

const LeftNav = () => {
  const { selectCategory, setselectCategory, mobileMenu } = useContext(Context);

  const navigate=useNavigate();

  const clicHandler = (name, type) => {
    
    switch (type) {
      case "category":
        return setselectCategory(name);
      case "home":
        return setselectCategory(name);
        case "menu":
        return false;
        default:
          break ;
    }
  };
  return (
    <div className="md:block w-[240px] overflow-y-auto h-full py-4 bg-black absolute md:relative z-10 translate-x-[-240] md:translate-x-0 transition-all ">
      <div className="flex px-5 flex-col">
        {categories.map((item) => {
          return (
            <React.Fragment key={item.name}>
              <LeftNavMenuItem
                text={item.type === "home" ? "Home" : item.name}
                icon={item.icon}
                action={() => {
                  clicHandler(item.name,item.type)
                  navigate("/");
                }}
                className={`${
                  selectCategory === item.name ? "bg-white/[0.15]" : ""
                }`}
              />

              {item.divider && <hr className="my-5 border-white/[0.2]" />}
            </React.Fragment>
          );
        })}

        <hr className="my-5 border-white/[0.2]" />
        <div className="text-white/[0.5] text-[12px]">
          Clone by:Abhishek kumar
        </div>
      </div>
    </div>
  );
};

export default LeftNav;
