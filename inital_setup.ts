var xmpp = require('simple-xmpp');

xmpp.on('online', function(data){

    console.log('Connected with JID: ' + data.jid.user);
    console.log('Sucesfull connection');
});

xmpp.on('chat', function(from, message){
    xmpp.send(from, 'echo: ' + message);

});

xmpp.on('error', function(err){

    console.error(err);

});

xmpp.on('subscribe', function(from){

    if (from === 'a.friend@gmail.com'){
        xmpp.acceptSubscription(from);
    }


});

xmpp.connect({
	jid: 'username@gmail.com',
	password: 'password',
	host: 'talk.google.com',
	port: 5222
});

xmpp.subscribe('your.friend@gmail.com');

xmpp.getRoster();
