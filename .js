function greeting(name){
  if (name === null) {
    return 'Hey there!';
  }
  if (typeof name === typeof []) {
    if (name.length > 0) {
      let greetingMultiple = '';
      greetingMultiple.forEach((elm) => {
        greetingMultiple += ', ' + elm; 
      });
    return 'Hey' + greetingMultiple + '!';
  }
  return 'Hey there!';
}
if (name === name.toUppersCare()) {
  return 'HELLO, ' + name + '!';
}
