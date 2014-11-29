/***********
* Written by: Christopher Winter
* November 28, 2014
* Checks URLs for 'www.theatlantic.com' and adds parameter to force website to load single page.
***********/
require('sdk/tabs').on('ready', changeURL);

function changeURL(tab) {
    var url = tab.url
    console.log(url.search('\\?single_page=true'))

    if ((url.search('www\\.theatlantic.com/') != -1) && (url.search('\\?single_page=true') == -1)) {
        tab.url = url + '?single_page=true  '
    }


}
