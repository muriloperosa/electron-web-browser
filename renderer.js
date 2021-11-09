// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.

const urls = {
    'google' : 'https://google.com/search',
    'yahoo'  : 'https://search.yahoo.com/search',
    'bing'   : 'https://bing.com/search',
};

const params = {
    'google' : 'q',
    'yahoo'  : 'p',
    'bing'   : 'q',
};

const sForm        = document.getElementById('form-search');
const sEngine      = document.getElementById('engine');
const sWord        = document.getElementById('q');

function executeSearch(engine, word){

    let sUrl = new URL(urls[engine] || urls['google']);
    sUrl.searchParams.append(params[engine] || params['google'], word);

    var childParams = [
        'height='+screen.height, 
        'width='+screen.width, 
    ].join(',');

    const child = window.open(sUrl.href, '_blank', childParams);
}

if(!!sForm){
    sForm.addEventListener('submit', function(evt){
        evt.preventDefault();
        const engine = sEngine.value || 'google';
        const word = sWord.value || 'electron js'; 
        executeSearch(engine, word);
    });
}
