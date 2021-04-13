// 写一个获取当前url查询字符串中的参数的方法

// function getParams(){
//     const search = window.location.search;
//     search = search.substr(1, search.length);
//     if (!search) return {};
//     const res = {};
//     search.split('&').map(item => {
//       const [key, value] = item.split('=');
//       res[key] = decodeURIComponent(value);
//     });
//     return res;
// }

function urlParams(search) {
    // const search = window.location.search;
    const params = {};
    search.replace(/([^&=?]+)=([^&]+)/g, (m, $1, $2) => params[$1] = $2);
    return params;
}

console.log(urlParams("?name=haha&age=21"));