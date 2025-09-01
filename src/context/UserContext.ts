import { createContext } from "react";
import type {
  UserManagementAction,
  UserManagementState,
} from "../Hooks/userManagementReducer";

export const UserContext = createContext<{
  user: UserManagementState;
  usersDispatch: UserManagementAction;
}>({
  users: [],
  usersDispatch: () => {},
});
