import { useEffect, useRef, useReducer } from "react";

const useFetch = (url) => {
  const cache = useRef({});

  const initialState = {
    status: "idle",
    error: null,
    data: [],
  };

  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "FETCHING":
        return { ...initialState, status: "fetching" };
      case "FETCHED":
        return { ...initialState, status: "fetched", data: action.payload };
      case "FETCH_ERROR":
        return { ...initialState, status: "error", error: action.payload };
      default:
        return state;
    }
  }, initialState);

  useEffect(() => {
    let cancelRequest = false;
    if (!url || !url.trim()) return;

    const fetchData = async () => {
      dispatch({ type: "FETCHING" });

      if (cache.current[url]) {
        const data = cache.current[url];
        dispatch({ type: "FETCHED", payload: data });
      } else {
        try {
          const response = await fetch(url);
          const data = await response.json();
          cache.current[url] = data;

          if (cancelRequest) return;
          dispatch({ type: "FETCHED", payload: data });
        } catch (error) {
          if (cancelRequest) return;
          dispatch({ type: "FETCH_ERROR", payload: error.message });
        }
      }
    };

    fetchData();

    return function cleanup() {
      cancelRequest = true;
    };
  }, [url]);

  return state;
};

export default useFetch;

// Before implementation of caching search results
// import axios from "../apis/axios-instance";
// const useRepo = (defaultSearchTerm) => {
//   const [fetchedRepo, setFetchedRepo] = useState([]);

//   useEffect(() => {
//     fetchGithubRepoByKeyword(defaultSearchTerm);
//   }, [defaultSearchTerm]);

//   const fetchGithubRepoByKeyword = async (term) => {
//     const response = await axios.get("/search/repositories", {
//       params: {
//         q: term,
//       },
//     });
//     setFetchedRepo(response.data.items);
//   };

//   return [fetchedRepo, fetchGithubRepoByKeyword];
// };

// export default useRepo;
