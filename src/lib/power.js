class Power {
    /**
     * @typedef {{name: string, description: string}} Data
     * @param {Data} data
     */
    constructor(data) {
        this.name = data.name;
        this.description = data.description;
    }
}

module.exports = Power;
