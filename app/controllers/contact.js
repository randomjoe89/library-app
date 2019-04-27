import Controller from '@ember/controller';
import { and, match, gte } from '@ember/object/computed';

export default Controller.extend({
    headerTitle: 'Contact Us',

    emailIsValid: match('emailAddress', /^.+@.+\..+$/),
    messageLongEnough: gte('textMessage.length', 5),

    isValid: and('emailIsValid', 'messageLongEnough'),


    actions: {
        sendMessage() {
            var email = this.get('emailAddress');
            var message = this.get('textMessage');

            alert('Sending your message in progress... ');

            var responseMessage = 'To: ' + email + ', Message: ' + message;
            this.set('responseMessage', responseMessage);
            this.set('emailAddress', '');
            this.set('message', '');
        }
    }
});
