import { useQuery } from '@tanstack/react-query';

import { axiosClient } from '#/utils/axiosClient';

const fetchCharacters = async (searchText, page, limit) => {
  const response = await axiosClient.get(`/characters`, {
    params: {
      q: searchText,
      page,
      limit,
    },
  });

  return response.data;
};

const useCharacters = ({ searchText, page, limit }) => {
  return useQuery({
    queryKey: [searchText, page, limit],
    queryFn: () => fetchCharacters(searchText, page, limit),
  });
};

export default useCharacters;
