import Dexie from "dexie";

const advancedPTEDatabase = new Dexie("UserData");
advancedPTEDatabase.version(1).stores({
    contectData: "++id",
  });