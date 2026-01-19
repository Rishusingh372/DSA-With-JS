// import { useEffect, useState } from "react";

// function SearchBar() {
//   const [query, setQuery] = useState("");
//   const [data, setData] = useState([]);
//   const [filteredData, setFilteredData] = useState([]);

//   useEffect(() => {
//     const storedData = JSON.parse(localStorage.getItem("items")) || [];
//     setData(storedData);
//     setFilteredData(storedData);
//   }, []);

//   const handleSearch = (e) => {
//     const value = e.target.value;
//     setQuery(value);

//     const filtered = data.filter(item =>
//       item.name.toLowerCase().includes(value.toLowerCase())
//     );

//     setFilteredData(filtered);
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="Search here..."
//         value={query}
//         onChange={handleSearch}
//         style={{ padding: "8px", width: "250px" }}
//       />

//       <ul>
//         {filteredData.map(item => (
//           <li key={item.id}>{item.name}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default SearchBar;

import { useEffect, useState } from "react";

function App(){
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  
  useEffect(() => {
    const sampleData = [
  { id: 1, name: "Apple" },
  { id: 2, name: "Banana" },
  { id: 3, name: "Mango" },
  { id: 4, name: "Orange" },
  { id: 5, name: "Grapes" }
];

localStorage.setItem("items", JSON.stringify(sampleData));
    const storedData = JSON.parse(localStorage.getItem("items")) || [];
    setData(storedData);
  }, []);

  const handleSearch = () => (e) =>{
    setSearch(e.target.value)
  }

  const filteredData = data.filter(item =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
     <input type="text"  value={search} onChange={handleSearch()}/>
      <ul>
        {filteredData.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </>
  )
}

export default App;
