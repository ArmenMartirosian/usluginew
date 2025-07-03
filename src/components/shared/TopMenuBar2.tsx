import { Link } from "react-router-dom";

const categories = [
  { label: "Запчасти", img: "/assets/parts.png", href: "/category/parts" },
  { label: "Электроника", img: "/assets/electronics.png", href: "/category/electronics" },
  { label: "Одежда и обувь", img: "/assets/clothing.png", href: "/category/clothing" },
  { label: "Все для дома", img: "/assets/home.png", href: "/category/home" },
  { label: "Для детей", img: "/assets/kids.png", href: "/category/kids" },
  { label: "Оборудование", img: "/assets/tools.png", href: "/category/tools" },
  { label: "Все для животных", img: "/assets/pets.png", href: "/category/pets" },
];

const TopMenuBar2 = () => {
  return (
    <div className="w-full overflow-x-auto py-4 px-4 bg-white shadow-sm">
      <div className="flex gap-4 min-w-max">
        {categories.map((cat, index) => (
          <Link
            key={index}
            to={cat.href}
            className="flex flex-col items-center bg-gray-100 hover:bg-gray-200 rounded-xl p-3 w-28 shrink-0 transition"
          >
            <img
              src={cat.img}
              alt={cat.label}
              className="w-12 h-12 object-contain mb-2"
            />
            <span className="text-sm text-center">{cat.label}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TopMenuBar2;
