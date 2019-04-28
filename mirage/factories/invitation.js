import { Factory } from 'ember-cli-mirage';

export default Factory.extend({

    email(i) {
        return `somedude${i}@badass.com`;
    }
});
