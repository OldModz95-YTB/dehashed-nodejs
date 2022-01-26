module.exports = (client) => {
    client.on('message', async message => {
        if(message.content.toLowerCase() === `test`)//CHANGE NAME COMMANDS HERE
        {
            if (message.author.bot || message.channel.type === 'dm')
            {
                return;
            }
            else
            {
                //*============================
                var request = require('request');

                var headers = {
                    'Accept': 'application/json'
                };

                var options = {
                    url: 'https://api.dehashed.com/search?query=username:test',
                    headers: headers,
                    auth: {
                        'user': 'exemple@exemple.com',
                        'pass': 'API KEY'
                    }
                };

                function callback(error, response, body) {
                    if (!error && response.statusCode == 200) {
                        console.log(body);
                    }
                    else
                    {
                        console.log(body);
                    }
                }

                request(options, callback);
                //*============================
            }
        }
    })
}