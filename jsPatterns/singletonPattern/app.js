const singleton = (function() {
    let instance;

    function createInstance() {
        const object = new Object({name: "Brad Traversy"});
        return object;
    }


    return {
        getInstance() {
            if (!instance) {
                instance = createInstance()
            }
            return instance;
        }
    }
})();


const instanceA = singleton.getInstance();
const instanceB = singleton.getInstance();

console.log(instanceA === instanceB);
// console.log(instanceA);