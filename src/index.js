import path from "path";

class g0vJSON {
  constructor(version) {
    this.version = version;
  }

  schema() {
    return require(path.join("..", "schemas", `${this.version}.json`))
  }
}

export default g0vJSON;
