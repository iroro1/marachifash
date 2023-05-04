import { colors } from "@/config/colors";
import { SET_APP_DATA } from "@/store/applicationStore";
import { Listbox } from "@headlessui/react";
import { Moon, Sun } from "iconsax-react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const SelectTheme = () => {
  const { theme, lang } = useSelector((a) => a.applicationStore);

  const people =
    lang === "en"
      ? [
          { id: 1, name: "Light", unavailable: false },
          { id: 2, name: "Dark", unavailable: false },
        ]
      : [
          { id: 1, name: "Lumière", unavailable: false },
          { id: 2, name: "Sombre", unavailable: false },
        ];

  const dispatch = useDispatch();
  const [selectedPerson, setSelectedPerson] = useState(people[0]);
  useEffect(() => {
    setSelectedPerson(people[0]);
  }, [lang]);

  return (
    <Listbox
      value={selectedPerson}
      onChange={(a) => {
        setSelectedPerson(a);
        dispatch(
          SET_APP_DATA({
            theme:
              a.name === "Light" || a.name === "Lumière" ? "light" : "dark",
          })
        );
      }}
    >
      <Listbox.Button className={"flex items-center"}>
        {selectedPerson.name === "Light" ||
        selectedPerson.name === "Lumière" ? (
          <Sun size={14} />
        ) : (
          <Moon size={14} />
        )}
        <span className="ml-1">{selectedPerson.name}</span>
      </Listbox.Button>
      <Listbox.Options
        style={{
          background: colors[theme].bodyBg,
        }}
        className={"absolute h-14 w-[80px] rounded-sm shadow-md"}
      >
        {people.map((person) => (
          <Listbox.Option
            key={person.id}
            value={person}
            disabled={person.unavailable}
            className="cursor-pointer flex items-center  h-[28px] pl-2 hover:bg-slate-500 hover:text-white z-50"
          >
            {person.name === "Light" || person.name === "Lumière" ? (
              <Sun size={14} />
            ) : (
              <Moon size={14} />
            )}
            <span className="ml-1">{person.name}</span>
          </Listbox.Option>
        ))}
      </Listbox.Options>
    </Listbox>
  );
};

export default SelectTheme;
