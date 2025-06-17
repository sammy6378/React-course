import { useState } from "react";

interface NavLink {
    id: string;
    label: string;
    content: string;
}


function Tabs() {
    const [active , setActive] = useState<string>("Home");

    const tabs: NavLink[] = [
        {id:"1", label: "Home", content: "Homepage"},
        {id:"2", label: "About", content: "Aboutpage"},
        {id:"3", label: "Blogs", content: "Blogpage"},
        {id:"4", label: "Contact", content: "ContactPage"}, 
    ]

  return (
    <>
      <div className="flex justify-between items-center p-2 border-b-2 border-gray-700">
        <div className="">
          <h2>Logo</h2>
        </div>
        <nav className="flex justify-between items-center gap-4">
          {tabs.map((tab) => (
            <div className="" key={tab.id}>
              <button
                onClick={() => setActive(tab.label)}
                className={`${
                  active === tab.label ? "text-orange-400" : "text-white"
                } cursor-pointer`}
              >
                {tab.label}
              </button>
            </div>
          ))}
        </nav>
      </div>

      {/* <div className="">
        {tabs.find((tab) => tab.label === active)?.content}
        </div> */}
    </>
  );
}

export default Tabs