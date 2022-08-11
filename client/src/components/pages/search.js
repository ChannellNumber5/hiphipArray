import React from "react";
// Components
import ToggleBar from "../ToggleBar";
import {useQuery} from "@apollo/client"
import {QUERY_USERS} from "../../utils/queries"

function Search() {
  const { loading, data } = useQuery(QUERY_USERS);
  const users = data?.users || [];
  console.log(data)
  // console.log(users)
  return (
    // This will need to be a map eventually
    <div>
         {loading ? (
            <div>Loading...</div>
          ) : (
            <ToggleBar
              users={users}
            />
          )}
    </div>
  );
}

export default Search