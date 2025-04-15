import { useQuery } from '@tanstack/react-query';
import { contentfulFetcher } from '../libs/contentfulFetcher';

export const useContentful = ({
  query,
  variables,
  queryKey
}: {
  query: string;
  variables?: Record<string, any>;
  queryKey: string;
}) => {
  return useQuery({
    queryKey: [queryKey, variables],
    queryFn: () => contentfulFetcher({ query, variables }),
  });
};