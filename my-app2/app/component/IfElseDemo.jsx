function IfElseCom({ name, flg }) {
    // if(flg){
    //   return <li>{name+' OK'}</li>
    // }else{
    //   return <li>{name}</li>
    // }
  
  return  flg ? <li>{name + ' OK!!!'}</li> : null;
}
export default IfElseCom;
