import { useSearchParams } from "react-router-dom";
const Search = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query");
  return (
    <>
      <div>Search returned: {query}</div>
      <p>Items...</p>
    </>
  );
};

export default Search;
