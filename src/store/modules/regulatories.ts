import entry13485 from "./regulatories_en-iso-13485-2016-002.json";
import entry14971 from "./regulatories_en-iso-14971-2012-001.json";
import entryMdr from "./mdr.json";
import entryCfr820 from "./820.json";

export default {
  namespaced: true,

  state: {
    regulatories: [entry13485, entry14971, entryMdr, entryCfr820]
  }
};
