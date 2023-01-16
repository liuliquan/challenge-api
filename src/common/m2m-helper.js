const _ = require("lodash");
const config = require("config");
const m2mAuth = require("tc-core-library-js").auth.m2m;

class M2MHelper {
  constructor() {
    this.m2m = m2mAuth(_.pick(config, ["AUTH0_URL", "AUTH0_AUDIENCE", "TOKEN_CACHE_TIME"]));
  }
  /**
   * Get M2M token.
   * @returns {Promise<String>} the M2M token
   */
  async getM2MToken() {
    return this.m2m.getMachineToken(config.AUTH0_CLIENT_ID, config.AUTH0_CLIENT_SECRET);
  }
}

module.exports = new M2MHelper();
