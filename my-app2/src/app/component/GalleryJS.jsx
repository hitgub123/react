import Profile from "./Profile";
function Gallery({ person, sex }) {
  return (
    <>
      <hr />
      <h2 style={{color:'red'}}>{'name:'+person.name}</h2>
      <h2>{'age:'+person.age}</h2>
      <hr />
      <h2>{sex}</h2>
      <Profile />
    </>
  );
}
export default Gallery;
