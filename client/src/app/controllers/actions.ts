export const setSearchTerm = (searchTerm: string) => {
  return { type: "SET_SEARCH_TERM" as const, searchTerm };
};