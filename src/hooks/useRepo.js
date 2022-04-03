import { useState, useEffect } from "react";
import github from "../apis/github";

const useRepo = (defaultSearchTerm) => {
  const [repo, setRepo] = useState([]);

  useEffect(() => {
    search(defaultSearchTerm);
  }, [defaultSearchTerm]);

  const search = async (term) => {
    const response = await github.get("/search/repositories", {
      params: {
        q: term,
      },
    });
    setRepo(response.data.items);
  };

  return [repo, search];
};

export default useRepo;
