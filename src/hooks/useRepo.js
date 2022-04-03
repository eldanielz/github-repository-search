import { useState, useEffect } from "react";
import axios from "../apis/axios-instance";

const useRepo = (defaultSearchTerm) => {
  const [fetchedRepo, setFetchedRepo] = useState([]);

  useEffect(() => {
    fetchGithubRepoByKeyword(defaultSearchTerm);
  }, [defaultSearchTerm]);

  const fetchGithubRepoByKeyword = async (term) => {
    const response = await axios.get("/search/repositories", {
      params: {
        q: term,
      },
    });
    setFetchedRepo(response.data.items);
  };

  return [fetchedRepo, fetchGithubRepoByKeyword];
};

export default useRepo;
