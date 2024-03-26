function UserDetail({ user }) {
  return (
    <div>
      <img src={user.picture} alt={user.name} />
      <h4>{user.name}</h4>
      <p>{`${user.country} (${user.city})`}</p>
      <p>{user.age}</p>
      <p>{user.gender}</p>
    </div>
  );
}

export default UserDetail;
