import { userActions } from "./user-slice";

export const getUserData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      if (!response.ok) {
        throw new Error("Could not fetch cart data from");
      }
      const data = await response.json();

      return data;
    };

    const usersData = await fetchData();
    dispatch(userActions.getUser(usersData));
  };
};
