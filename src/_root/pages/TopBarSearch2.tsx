import { useState } from "react";
import { Input } from "@/components/ui";
import { useNavigate } from "react-router-dom";

const TopbarSearch2 = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim() !== "") {
      navigate(`/search?query=${encodeURIComponent(query.trim())}`);
    }
  };

  return (
    <form
      onSubmit={handleSearch}
      className="flex items-center gap-2 bg-gray-100 rounded-xl px-3 py-2 w-full max-w-md"
    >
      <img
        src="/assets/icons/search.svg"
        alt="search"
        width={18}
        height={18}
        className="opacity-50"
      />
      <Input
        type="text"
        placeholder="Search products..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="bg-transparent border-none outline-none focus:ring-0 text-sm"
      />
    </form>
  );
};

export default TopbarSearch2;