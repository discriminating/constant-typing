console.clear();

function type(channel, authorization) {
    fetch(`https://discord.com/api/v9/channels/${channel}/typing`, {
        method: 'POST',
        headers: { 'authorization': authorization }
    });
    setTimeout(type, 8000, channel, authorization);
} 

function start(channel) { webpackChunkdiscord_app.push([[0],,e=>Object.keys(e.c).find(t=>(t=e(t)?.default?.getToken?.())&&type(channel, t))]); }

start('channel id');
