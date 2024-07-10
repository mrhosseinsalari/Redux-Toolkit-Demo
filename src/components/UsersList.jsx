import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAsyncUsers } from "../features/user/userSlice";

function UsersList() {
  const state = useSelector((state) => state.users);
  console.log(state);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAsyncUsers());
  }, [dispatch]);

  if (state.loading) return <p>Loading ...</p>;
  if (state.error) return <p>{state.error}</p>;

  return (
    <div>
      {state.data &&
        state.data.map((user) => <li key={user.id}>{user.name}</li>)}
    </div>
  );
}

export default UsersList;
