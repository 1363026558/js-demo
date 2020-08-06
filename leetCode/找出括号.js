var isValid = function(s) {
  if (s.length === 0) return ture;
  while (s.indexOf('{}') !== -1 || s.indexOf('()') !== -1 || s.indexOf('[]') !== -1) {
      if (s.indexOf('{}') !== -1) s = s.replace(/\{\}/g, '');
      if (s.indexOf('()') !== -1) s = s.replace(/\(\)/g, '');
      if (s.indexOf('[]') !== -1) s = s.replace(/\[\]/g, '');
  }
  console.log(s === '');
  
  return s === '';
  // if (s.indexOf('{}') !== -1){
  //   let a = s.replace(/\{\}/g, '');
  //   console.log('sss', a);
    
  // }
};

isValid('{[]}({})');