// {
//   "API": [{
//   title: 'api',
//   content: 'sdfdf'
//   url: './index.html',
//   children: [{
//     title: 'api',
//     content: 'api',
//     url: ''
//   }]
// }]
// }
const fs = require('fs')
const path = require('path')
const cheerio = require('cheerio');
const searchJson = {}
const h1Sign = '----h1----'

function objToArr(obj){
  var arr = []
  for(var i in obj){
    obj[i] && arr.push(obj[i])
  }
  return arr;
}

function filterHTMLTag(msg) {
  if(typeof msg !== 'string') return ''
  msg = msg.replace(/<\/?[^>]*>/g, ''); //去除HTML Tag
  msg = msg.replace(/[|]*\n/, '') //去除行尾空格
  msg = msg.replace(/&npsp;/ig, ''); //去掉npsp
  return msg;
}

function getContent(childNodes, $, url){
  if(!childNodes)return []
  let children = {};
  let content = ''
  let i = 0;  
  let curParent = null;

  for(let i=0; i< childNodes.length; i++){
    let child = $(childNodes[i]);
    let tagName = child[0].tagName;    
    if(tagName === 'h1'){
      curParent = h1Sign
    }else if(tagName === 'h2' || tagName === 'h3'){
      curParent = child.attr('id')
      children[curParent] = {
        title: filterHTMLTag(child.text()),
        url: url + '#' + curParent,
        content: filterHTMLTag(child.text())
      }
    }else if(curParent){
      if(curParent === h1Sign){
        content += (filterHTMLTag(child.text()) || '')
      }else children[curParent].content += (filterHTMLTag(child.text()) || '');
    }
  }
  
  return {
    content: content,
    children: objToArr(children)
  };
  
}

module.exports = {
  page: function(page, book){
    if(page.type === 'md'){
      page = Object.assign({}, page);
      let $ = cheerio.load(page.content);
      let childNodes = $('#markdown-body').contents();
      searchJson[book.name] = searchJson[book.name] ? searchJson[book.name] : [];
      const dist = this.config.dist;
      let pagePath = page.distPath.substr(dist.length)

      const content = getContent(childNodes, $, pagePath)
      searchJson[book.name].push({
        title: page.title,
        content: content.content,
        url: pagePath,
        children: content.children
      })

    }
  },

  init: function(){
    this.addAsset('./search_json.js', 'js')
  },

  finish: function(){
    const dist = this.config.dist;
    fs.writeFileSync(path.resolve(dist, './search_json.js'), `window.ydoc_plugin_search_json = ${JSON.stringify(searchJson, null, 2)}`)
  },

  assets: {
    dir: './assets',
    js: ['core.js', 'search.js'],
    css: 'search.css'
  },

  "tpl:header": function() {
    return `<div class="m-search">
      <div class="icon">&#xf0fd;</div>
      <input type="text" class="input js-input" placeholder="搜索" />
      <div class="m-search-result js-search-result"></div>
    </div>`;
  }
}