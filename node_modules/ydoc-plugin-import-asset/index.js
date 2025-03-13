function _importAsset(fn){
  return function(items, type){
    if(!items) return;
    if(typeof items === 'string') items = [items];
    if(Array.isArray(items)){
      items.forEach(function(item){
        fn(item, type)
      })
    }
  }
}

module.exports = {
  init: function(){
    if(!this.options || typeof this.options !== 'object'){
      return;
    }
    var importAsset = _importAsset(this.addAsset);
    importAsset(this.options.js, 'js');
    importAsset(this.options.css, 'css')
  }
}
