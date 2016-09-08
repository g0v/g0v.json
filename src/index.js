import path from "path";
import v1 from "../schemas/v1.json";

const schemas = {
  v1: v1,
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
