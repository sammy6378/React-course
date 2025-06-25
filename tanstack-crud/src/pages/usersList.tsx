import ErrorComp from "../components/ErrorComp";
import { useUsers } from "../hooks/useUserHook";

function Users() {
  const { data: users, error } = useUsers();
  if(error){
    return <ErrorComp error={error} />
  }
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {users?.map((user) => (
        <div key={user.id} className="bg-white shadow-lg rounded p-4">
          <p>Name: {user.full_name}</p>
          <p>Phone: {user.phone_number}</p>
          <p>Username: {user.username}</p>
          <p>Email: {user.email}</p>
        </div>
      ))}
    </div>
  );
}

export default Users;
