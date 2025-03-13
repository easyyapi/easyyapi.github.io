let start = new Date().getTime();

module.exports = {
  finish: function(){    
    let end = new Date().getTime();
    let executionTime = (end - start)/1000;
    this.log.info('Execution-time: ' + executionTime + 's')
  }
}
