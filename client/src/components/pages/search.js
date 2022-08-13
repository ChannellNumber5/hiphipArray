import React from "react";
// Components
import ToggleBar from "../ToggleBar";
import {useQuery} from "@apollo/client"
import {QUERY_PROJECTS, QUERY_USERS, QUERY_USERS_AND_PROJECTS} from "../../utils/queries"

function Search() {
  const { loading, data } = useQuery(QUERY_USERS_AND_PROJECTS);

  const users = data?.users || [];
  const projects = data?.projects || [];
  console.log(loadedData)

  // console.log(users)
  return (
    // This will need to be a map eventually
    <div>
         {loading ? (
            <div>Loading...</div>
          ) : (
            <ToggleBar
              users={users}
              projects={projects}
            />
          )}
    </div>
  );
}

export default Search