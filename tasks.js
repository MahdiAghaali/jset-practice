const stringLength = (string) => {
    let len = string.length;
    if ( len < 1 || len > 10 ){
        return 'error';
    }
    else {
    return len;
    }
}
  
module.exports = stringLength;