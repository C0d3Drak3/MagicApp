"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import SetData from "../types/sets";

type Filter1Props = {
  onSearch: (searchTerm: string) => void;
};
type Filter1State = {
  searchTerm: string;
  // Resto de tus estados y tipos
};

const Filter1: React.FC<Filter1Props> = ({ onSearch }) => {
  const [state, setState] = useState<Filter1State>({
    searchTerm: "",
    // Resto de tus estados y valores por defecto
  });
  const { searchTerm } = state;

  const [showFilters, setShowfilters] = useState(false);
  const [check, setCheck] = useState({
    white: false,
    blue: false,
    red: false,
    green: false,
    black: false,
    grey: false,
    creature: false,
    land: false,
    enchantment: false,
    planewalker: false,
    artifact: false,
    basic: false,
    instant: false,
    sorcery: false,
    plane: false,
    battle: false,
  });

  const { white, blue, red, green, black, grey } = check;

  const [sets, setSets] = useState<SetData[]>([]); // Almacena los datos de los sets.
  const [selectedSet, setSelectedSet] = useState(""); // Almacena el set seleccionado.

  useEffect(() => {
    axios
      .get("https://api.scryfall.com/sets")
      .then((response) => {
        const setList: SetData[] = response.data.data.map((set: any) => ({
          name: set.name,
          code: set.code,
        }));
        setSets(setList);
      })
      .catch((error) => {
        console.error("Error al obtener los sets:", error);
      });
  }, []);

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCheck({
      ...check,
      [e.target.name]: e.target.checked,
    });
  };

  const applyFilters = () => {
    setCheck({
      ...check,
      white: false,
      blue: false,
      red: false,
      green: false,
      black: false,
      grey: false,
      creature: false,
      planewalker: false,
      artifact: false,
      basic: false,
      instant: false,
      sorcery: false,
      plane: false,
      battle: false,
      land: false,
      enchantment: false,
    });
    console.log(selectedSet);
    console.log(check);
  };

  const CardTypes = [
    { id: "artifact", label: "Artifact" },
    { id: "creature", label: "Creature" },
    { id: "planewalker", label: "Planewalker" },
    { id: "basic", label: "Basic" },
    { id: "land", label: "Land" },
    { id: "enchantment", label: "Enchantment" },
    { id: "instant", label: "Instant" },
    { id: "sorcery", label: "Sorcery" },
    { id: "plane", label: "Plane" },
    { id: "battle", label: "Battle" },
  ];

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState((prevState) => ({
      ...prevState,
      searchTerm: e.target.value,
    }));
  };
  const performSearch = () => {
    console.log("Realizar búsqueda con:", state.searchTerm);
    onSearch(state.searchTerm);
  };

  const styles = {
    search: "flex items-center space-x-2 rounded-full bg-white p-2",
    searchIcon: "w-6 h-6 text-blue-500",
    searchInput: "border-none focus:outline-none bg-transparent",
  };

  return (
    <div className="container  max-w-screen  lg:max-w-full  bg-[#726379]">
      <div className=" md:py-9 lg:px-10 md:px-6 py-9 px-4">
        <div className=" flex justify-between items-center mb-4">
          <h2 className=" lg:text-3xl text-2xl lg:leading-9 leading-7 text-gray-800 font-semibold">
            Search your card
          </h2>
          <div className={styles.search}>
            <svg
              className={styles.searchIcon}
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M11 21s4.5-6 7-10c2.5-4-1-10-1-10s-7.5 5-10 10a9.956 9.956 0 0010 10z" />
            </svg>
            <input
              type="text"
              placeholder="Card Name..."
              className={styles.searchInput}
              value={searchTerm}
              onChange={handleSearchChange}
              onKeyUp={(e) => {
                if (e.key === "Enter") {
                  performSearch(); // Llama a la función de búsqueda cuando se presiona Enter
                }
              }}
            />
            <button
              onClick={performSearch}
              className="bg-[#726379] text-white rounded-full p-2"
            >
              Search
            </button>
          </div>
          {/*  filters Button (md and plus Screen) */}
          <button
            onClick={() => setShowfilters(!showFilters)}
            className=" cursor-pointer sm:flex hidden hover:bg-gray-700 focus:ring focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 py-4 px-6 bg-gray-800 flex text-base leading-4 font-normal text-white justify-center items-center "
          >
            <svg
              className=" mr-2"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 12C7.10457 12 8 11.1046 8 10C8 8.89543 7.10457 8 6 8C4.89543 8 4 8.89543 4 10C4 11.1046 4.89543 12 6 12Z"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M6 4V8"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M6 12V20"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 18C13.1046 18 14 17.1046 14 16C14 14.8954 13.1046 14 12 14C10.8954 14 10 14.8954 10 16C10 17.1046 10.8954 18 12 18Z"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 4V14"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 18V20"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M18 9C19.1046 9 20 8.10457 20 7C20 5.89543 19.1046 5 18 5C16.8954 5 16 5.89543 16 7C16 8.10457 16.8954 9 18 9Z"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M18 4V5"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M18 9V20"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Filters
          </button>
        </div>
        {/* Filters Button (Small Screen)  */}
        <button
          onClick={() => setShowfilters(!showFilters)}
          className="cursor-pointer mt-6 block sm:hidden hover:bg-gray-700 focus:ring focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 py-2 w-full bg-gray-800 flex text-base leading-4 font-normal text-white justify-center items-center"
        >
          <svg
            className=" mr-2"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 12C7.10457 12 8 11.1046 8 10C8 8.89543 7.10457 8 6 8C4.89543 8 4 8.89543 4 10C4 11.1046 4.89543 12 6 12Z"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M6 4V8"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M6 12V20"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 18C13.1046 18 14 17.1046 14 16C14 14.8954 13.1046 14 12 14C10.8954 14 10 14.8954 10 16C10 17.1046 10.8954 18 12 18Z"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 4V14"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 18V20"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M18 9C19.1046 9 20 8.10457 20 7C20 5.89543 19.1046 5 18 5C16.8954 5 16 5.89543 16 7C16 8.10457 16.8954 9 18 9Z"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M18 4V5"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M18 9V20"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Filters
        </button>
      </div>

      <div
        id="filterSection"
        className={
          "relative md:py-10 lg:px-20 md:px-6 py-9 px-4 bg-gray-100 w-full " +
          (showFilters ? "block" : "hidden")
        }
      >
        {/* Cross button Code  */}
        <div
          onClick={() => setShowfilters(false)}
          className=" cursor-pointer absolute right-0 top-0 md:py-10 lg:px-20 md:px-6 py-9 px-4"
        >
          <svg
            className=" lg:w-6 lg:h-6 w-4 h-4"
            viewBox="0 0 26 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M25 1L1 25"
              stroke="#1F2937"
              strokeWidth="1.25"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M1 1L25 25"
              stroke="#27272A"
              strokeWidth="1.25"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        {/* Colors Section */}
        <div>
          <div className="flex space-x-2">
            <p className="lg:text-2xl text-xl lg:leading-6 leading-5 font-medium text-gray-800">
              Colors
            </p>
          </div>
          <div className=" md:flex md:space-x-6 mt-8 grid grid-cols-3 gap-y-8 flex-wrap">
            <div className=" flex space-x-2 md:justify-center md:items-center items-center justify-start ">
              <input
                className="w-4 h-4 mr-2"
                type="checkbox"
                id="White"
                name="white"
                value="White"
                checked={white}
                onChange={changeHandler}
              />
              <div className=" w-4 h-4 rounded-full bg-white shadow"></div>
              <p className=" text-base leading-4 text-gray-600 font-normal">
                White
              </p>
            </div>
            <div className=" flex space-x-2 justify-center items-center">
              <input
                className="w-4 h-4 mr-2"
                type="checkbox"
                id="Blue"
                name="blue"
                value="Blue"
                checked={blue}
                onChange={changeHandler}
              />
              <div className=" w-4 h-4 rounded-full bg-blue-600 shadow"></div>
              <p className=" text-base leading-4 text-gray-600 font-normal">
                Blue
              </p>
            </div>
            <div className=" flex space-x-2 md:justify-center md:items-center items-center justify-end">
              <input
                className="w-4 h-4 mr-2"
                type="checkbox"
                id="Red"
                name="red"
                value="Red"
                checked={red}
                onChange={changeHandler}
              />
              <div className=" w-4 h-4 rounded-full bg-red-600 shadow"></div>
              <p className=" text-base leading-4 text-gray-600 font-normal">
                Red
              </p>
            </div>
            <div className=" flex space-x-2 md:justify-center md:items-center items-center justify-start ">
              <input
                className="w-4 h-4 mr-2"
                type="checkbox"
                id="Green"
                name="green"
                value="Green"
                checked={green}
                onChange={changeHandler}
              />
              <div className=" w-4 h-4 rounded-full bg-green-600 shadow"></div>
              <p className=" text-base leading-4 text-gray-600 font-normal">
                Green
              </p>
            </div>
            <div className=" flex space-x-2 justify-center items-center">
              <input
                className="w-4 h-4 mr-2"
                type="checkbox"
                id="Black"
                name="black"
                value="Black"
                checked={black}
                onChange={changeHandler}
              />
              <div className=" w-4 h-4 rounded-full bg-black shadow"></div>
              <p className=" text-base leading-4 text-gray-600 font-normal">
                Black
              </p>
            </div>
            <div className=" flex space-x-2 md:justify-center md:items-center items-center justify-start">
              <input
                className="w-4 h-4 mr-2"
                type="checkbox"
                id="Grey"
                name="grey"
                value="Grey"
                checked={grey}
                onChange={changeHandler}
              />
              <div className=" w-4 h-4 rounded-full bg-gray-600 shadow"></div>
              <p className=" text-base leading-4 text-gray-600 font-normal">
                Grey
              </p>
            </div>
          </div>
        </div>

        <hr className=" bg-gray-200 lg:w-6/12 w-full md:my-10 my-8" />

        {/* Types Section */}
        <div>
          <div className=" flex space-x-2">
            <p className=" lg:text-2xl text-xl lg:leading-6 leading-5 font-medium text-gray-800 ">
              Card Type
            </p>
          </div>
          <div className=" md:flex md:space-x-6 mt-8 grid grid-cols-3 gap-y-8 flex-wrap">
            {CardTypes.map((cardType) => (
              <div
                key={cardType.id}
                className="flex space-x-2 md:justify-center md:items-center items-center justify-start"
              >
                <input
                  className="w-4 h-4 mr-2"
                  type="checkbox"
                  id={cardType.id}
                  name={cardType.id}
                  value={cardType.id}
                  checked={check[cardType.id as keyof typeof check]}
                  onChange={changeHandler}
                />
                <div className="inline-block">
                  <div className="flex space-x-6 justify-center items-center">
                    <label
                      className="mr-2 text-sm leading-3 font-normal text-gray-600"
                      htmlFor={cardType.id}
                    >
                      {cardType.label}
                    </label>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <hr className=" bg-gray-200 lg:w-6/12 w-full md:my-10 my-8" />
        {/* Sets Section */}
        <div>
          <div className=" flex space-x-2">
            <p className="  lg:text-2xl text-xl lg:leading-6 leading-5 font-medium text-gray-800 ">
              Card Set
            </p>
          </div>
          <div className=" md:flex md:space-x-6 mt-8 grid grid-cols-3 gap-y-8 flex-wrap">
            <div className="flex space-x-2 md:justify-center md:items-center items-center justify-start">
              <select
                id="CardSet"
                name="cardSet"
                value={selectedSet}
                onChange={(e) => setSelectedSet(e.target.value)}
                className="py-2 px-4 rounded-lg border border-gray-300 focus:outline-none focus:ring focus:border-blue-300"
              >
                <option value="">Select a set</option>
                {sets.map((set) => (
                  <option key={set.code} value={set.code}>
                    {set.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
        <hr className=" bg-gray-200 lg:w-6/12 w-full md:my-10 my-8" />

        {/* To add Section */}

        <div className="px-0 mt-10 w-full md:w-auto md:mt-0 md:absolute md:right-0 md:bottom-0 md:py-10 lg:px-20 md:px-6">
          <button
            onClick={applyFilters}
            className="w-full hover:bg-gray-700 focus:ring focus:ring-offset-2 focus:ring-gray-800 text-base leading-4 font-medium py-4 px-10 text-white bg-gray-800"
          >
            Apply Filter
          </button>
        </div>
      </div>
    </div>
  );
};

export default Filter1;
