import Dexie from "dexie";

const advancedDatabase = new Dexie("UserData");
advancedDatabase.version(1).stores({
    contectData: "++id",
  });

  export default advancedDatabase;