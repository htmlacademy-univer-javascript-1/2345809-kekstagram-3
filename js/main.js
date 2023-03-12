function RandomDig(min,max){
  if(min>max){
    const t=min;
    min=max;
    max=t;
  }
  const res = Math.round(Math.random()*(max-min)+min);
  return res;
}

function LengthStr(str, length){
  return str.length <=length;
}
