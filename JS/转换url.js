// parseUrl("http://www.xiyanghui.com/product/list?id=123456&sort=discount#title");
/**
 * 预期效果
{
    protocol: "http",
    host: "www.xiyanghui.com",
    path: "/product/list",
    params: {
        id: "12345",
        sort: "discount"
    },
    hash: "title"
}
*/

function parseUrl(url) {
    let tempUrl = new URL(url);
    return {
        source: url,
        protocol: tempUrl.protocol.replace(':', ''),
        host: tempUrl.hostname,
        port: tempUrl.port,
        query: tempUrl.search,
        params: (() => {
            var ret = {}, querys = [];
            var searchQuery = tempUrl.search.replace(/^\?/, '').split('&');
            for (var i = 0; i < searchQuery.length; i++) {
                if (searchQuery[i]) {
                    querys = searchQuery[i].split('=');
                    ret[querys[0]] = querys[1];
                }
            }
            return ret;
        })(),
        file: (tempUrl.pathname.match(/\/([^\/?#]+)$/i) || [, ''])[1],
        hash: tempUrl.hash.replace('#', ''),
        path: tempUrl.pathname.replace(/^([^\/])/, '/$1'),
        relative: (tempUrl.href.match(/tps?:\/\/[^\/]+(.+)/) || [, ''])[1],
        segments: tempUrl.pathname.replace(/^\//, '').split('/')
    };
}
// console.log(parseUrl("http://www.xiyanghui.com/product/list?id=123456&sort=discount#title"));

let url = new URL('https://developer.mozilla.org/zh-CN/docs/Web/API/URL');
console.log(url);

