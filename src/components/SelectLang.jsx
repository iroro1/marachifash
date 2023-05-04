import React, { useState } from "react";
import { Listbox } from "@headlessui/react";
import { useDispatch, useSelector } from "react-redux";
import { colors } from "@/config/colors";
import { SET_APP_DATA } from "@/store/applicationStore";

const SelectLang = () => {
  const { theme, lang } = useSelector((a) => a.applicationStore);
  const dispatch = useDispatch();
  const people = [
    { id: 1, name: "English", unavailable: false, flag: "gb" },
    { id: 2, name: "French", unavailable: false, flag: "fr" },
  ];

  const [selectedPerson, setSelectedPerson] = useState(people[0]);
  return (
    <Listbox
      onChange={(a) => {
        setSelectedPerson(a);
        dispatch(
          SET_APP_DATA({
            lang: a.name === "English" ? "en" : "fr",
          })
        );
      }}
      value={selectedPerson}
    >
      <Listbox.Button>
        <span className={`fi fi-${selectedPerson.flag} mr-1 rounded-lg`}></span>

        {lang === "en" ? "English" : "French"}
      </Listbox.Button>
      <Listbox.Options
        style={{
          background: colors[theme].bodyBg,
        }}
        className={
          "absolute h-14 w-[80px] right-4 lg:right-14 rounded-sm shadow-md"
        }
      >
        {people.map((person) => (
          <Listbox.Option
            key={person.id}
            value={person}
            disabled={person.unavailable}
            className="cursor-pointer flex items-center  h-[28px] pl-2 hover:bg-slate-500 hover:text-white"
          >
            <span className={`fi fi-${person.flag} mr-1 rounded-lg`}></span>{" "}
            {person.name}
          </Listbox.Option>
        ))}
      </Listbox.Options>
    </Listbox>
  );
};

export default SelectLang;
