function ListCom({ exclude }) {
  const list = ['a', 'b', 'c', 'd', 'e'];
  const lilist = list.filter(function (item) { 
    console.log(item,item != exclude,exclude)
    return item != exclude;
  }).map(function (item) { 
    return <li key={item}>{item}</li>
  });
  return  <ul>{lilist}</ul> ;
}
export default ListCom;
