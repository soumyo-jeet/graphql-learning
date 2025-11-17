import { useLazyQuery, useMutation, useQuery } from "@apollo/client/react";
import { USER, USERS } from "./graphql/query.js";
import { NEWUSER } from "./graphql/mutation.js";

function GetIndividualUser() {
  const { loading, error, data } = useQuery(USER, { variables: { id: "691b735d87751daf641ebb**" } });
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;
  console.log(data.user)
  return (
    <div className="App">
      Hi {data?.user?.name}
    </div>
  );
}

function GetOccs() {
  // data disclosing after trigger
  const [loadOccs, { called, loading, data }] = useLazyQuery(USERS);
  if (called && loading) return <p>Loading ...</p>;
  console.log(data)
  return (
    <div>
      Which one your is occupation?
      <button onClick={loadOccs}>Choose Occupation</button>
      <br />
      {
        called && (
          <ul>
            {
              data.users.map((user) => {
                return (
                  <li key={user.occ}>{user.occ}</li>
                )
              })
            }
          </ul>
        )
      }
    </div>
  )
}

function AddUser () {
  const [newUser, { data }] = useMutation(NEWUSER)
  const variables = {  
    "name": "Annesha Naha",
    "age": 85,
    "gender": "Female",
    "occ": "Student",
    "email": "hijibiji@gamil.com",
  }

  return (
    <div>
      <button onClick={() => newUser({variables: variables})}>Create User</button>
      {
        data && (<h1>{data?.newUser}</h1>)
      }
    </div>
  )
}

function App() {
  return (
    <div>
      <GetIndividualUser />
      <GetOccs />
      <AddUser />
    </div>
  );
}

export default App;
