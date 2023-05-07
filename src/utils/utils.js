import { debounce } from "lodash";

export function filterData(data, value) {
  return [...data].filter((elm) =>
    elm.genre.toLowerCase().includes(value.toLowerCase())
  );
}

// export const debounceFilter = (data, value) =>
//   debounce(() => filterData(data, value), 1000);
