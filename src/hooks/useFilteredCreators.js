import { useState, useEffect } from 'react';
import { creatorsSourceUrl } from '../config';
import { useFilters } from './useFilters';

export const useFilteredCreators = () => {
  const [allCreators, setAllCreators] = useState(null);
  const [filteredCreators, setFilteredCreators] = useState([]);

  const filters = useFilters();

  useEffect(() => {
    const uploadCreators = async () => {
      const response = await fetch(creatorsSourceUrl);
      const responseData = await response.json();
      console.log(responseData);
      setAllCreators(responseData);
    };
    uploadCreators();
  }, []);

  useEffect(() => {
    if (!allCreators) return;

    const result = [];
    for (const creator of allCreators) {
      <></>;
    }
  });
};
