import { Factory } from 'ember-cli-mirage';

export default Factory.extend({

    name(i) {
        return `FactoryName_${i}`;
    },

    address(i) {
        return `${i} First Street`;
    },

    phone(i) {
        return `${i}111111111`;
    }
});
