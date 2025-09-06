import { useContext, useEffect, useState } from "react";
import UserForm from "../../components/UserForm/UserForm";
import { UserContext } from "../../context/UserContext";
import type { User } from "../../types/User";
import { useParams } from "react-router-dom";

function EditView() {
  const [editUser, setEditUser] = useState<User | undefined>();
  const { users, usersDispatch } = useContext(UserContext);

  const { id } = useParams();

  useEffect(() => {
    const user = users.find((user) => "" + user.id === id);
    console.log(user);
    setEditUser(user);
  }, [users, id]);

  function updateUser(user: User) {
    usersDispatch({ type: "UPDATE_USER", user: user });
    alert("Updated user");
  }

  function displayUserForm() {
    if (editUser) {
      return (
        <UserForm
          user={editUser}
          onSubmit={(user) => {
            () => {};
          }}
        />
      );
    } else {
      return "User not found";
    }
  }

  return displayUserForm();
}

export default EditView;
