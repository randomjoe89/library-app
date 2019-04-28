export default function() {


    this.namespace = 'api';

    this.post('/invitations');

    this.get('/invitations', (schema, request) => {
        return schema.invitations.all();
    });
}
