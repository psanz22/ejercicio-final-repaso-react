import UserItem from "./UserItem";

function UsersList({ users }) {
  return (
    <section>
      <ul>
        {users.map((user) => {
          return <UserItem key={user.id} userData={user} />;
        })}
      </ul>
    </section>
  );
}

export default UsersList;
