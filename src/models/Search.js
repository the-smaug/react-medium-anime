import { types, getParent } from "mobx-state-tree";

import request from "../utils/request";

const Search = types
  .model({
    startDate: types.optional(types.string, ""),
    endDate: types.optional(types.string, "")
  })
  .actions(self => ({
    search(searchedManga) {
      if (searchedManga.length < 3) {
        return;
      }

      const listStore = getParent(self).list;

      console.log(encodeURI(searchedManga));
      request.searchMangas(encodeURI(searchedManga)).then(mangas => {
        listStore.setMangas(mangas);
      });
    }
  }));

export default Search;
