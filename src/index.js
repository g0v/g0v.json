import path from "path";
import v1 from "../schemas/v1.json";
import v2 from "../schemas/v2.json";

const schemas = {
  v1: v1,
  v2: v2
};

class g0vJSON {
  constructor(version) {
    this.version = version;
  }

  schema() {
    return schemas[this.version];
  }
}

export default g0vJSON;
