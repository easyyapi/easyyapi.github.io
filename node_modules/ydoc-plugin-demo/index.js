let firstPage = false;
let firstBeforePage = false;

module.exports = {
  init: async function(){
    console.log(this)
    await new Promise((resolve)=>{
      setTimeout(()=>{
        resolve('ok')
        console.log('init demo plugin')
      }, 100)
    })
  },
  finish: function(){    
    console.log('end...')
  },
  'page:before': function(page){
    if(firstBeforePage) return;
    firstBeforePage = true;
    console.log('beforePage', page)
  },
  page: function(page){
    if(firstPage) return;
    firstPage = true;
    console.log('page', page)
  }
}