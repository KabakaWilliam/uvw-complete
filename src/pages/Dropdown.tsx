import { useState } from "react";

const SearchBarPage = () => {
  const [occupation, setOccupation] = useState("");
  const [nationality, setNationality] = useState("");
  const [condition, setCondition] = useState("");
  const [occupationOptions, setOccupationOptions] = useState([
    "Doctor",
    "Teacher",
    "Engineer",
  ]);
  const [nationalityOptions, setNationalityOptions] = useState([
    "American",
    "British",
    "Canadian",
  ]);
  const [conditionOptions, setConditionOptions] = useState([
    "Healthy",
    "Sick",
    "Injured",
  ]);

  const handleOccupationSelect = (option: string) => {
    setOccupation(option);
  };

  const handleNationalitySelect = (option: string) => {
    setNationality(option);
  };

  const handleConditionSelect = (option: string) => {
    setCondition(option);
  };

  return (
    <div className="flex items-center justify-between border-b-2 p-4">
      <input type="text" placeholder="Search..." className="w-full p-2" />

      <div className="flex items-center space-x-4">
        <DropdownButton
          label={occupation || "Occupation"}
          options={occupationOptions}
          handleSelect={handleOccupationSelect}
        />
        <DropdownButton
          label={nationality || "Nationality"}
          options={nationalityOptions}
          handleSelect={handleNationalitySelect}
        />
        <DropdownButton
          label={condition || "Condition"}
          options={conditionOptions}
          handleSelect={handleConditionSelect}
        />
      </div>
    </div>
  );
};
export default SearchBarPage;
interface DropdownButtonProps {
  label: string;
  options: string[];
  handleSelect: (option: string) => void;
}

const DropdownButton = ({
  label,
  options,
  handleSelect,
}: DropdownButtonProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOptionSelect = (option: string) => {
    handleSelect(option);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="font-semibold text-gray-500 hover:text-gray-700 focus:outline-none"
      >
        {label} ▼
      </button>
      {isOpen && (
        <div className="absolute top-full mt-1 w-48 rounded-lg bg-white py-2 shadow-lg">
          {options.map((option) => (
            <div
              key={option}
              onClick={() => handleOptionSelect(option)}
              className="cursor-pointer px-4 py-2 hover:bg-gray-100"
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
