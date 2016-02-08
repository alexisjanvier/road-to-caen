const config = require('config')

module.exports = {
    'Display Home': function(client) {
        client
            .url('http://localhost:8088')
            .pause(1000);

        client.expect.element('body').to.be.present.before(1000);
        client.expect.element('#start_here').text.to.equal('For the moment, you are in Paris');

        client.end();
    },
};
