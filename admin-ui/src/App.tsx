import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { ProjectList } from "./project/ProjectList";
import { ProjectCreate } from "./project/ProjectCreate";
import { ProjectEdit } from "./project/ProjectEdit";
import { ProjectShow } from "./project/ProjectShow";
import { HealthAreaList } from "./healthArea/HealthAreaList";
import { HealthAreaCreate } from "./healthArea/HealthAreaCreate";
import { HealthAreaEdit } from "./healthArea/HealthAreaEdit";
import { HealthAreaShow } from "./healthArea/HealthAreaShow";
import { ObjectiveList } from "./objective/ObjectiveList";
import { ObjectiveCreate } from "./objective/ObjectiveCreate";
import { ObjectiveEdit } from "./objective/ObjectiveEdit";
import { ObjectiveShow } from "./objective/ObjectiveShow";
import { ContributorList } from "./contributor/ContributorList";
import { ContributorCreate } from "./contributor/ContributorCreate";
import { ContributorEdit } from "./contributor/ContributorEdit";
import { ContributorShow } from "./contributor/ContributorShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"GePoS"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="Project"
          list={ProjectList}
          edit={ProjectEdit}
          create={ProjectCreate}
          show={ProjectShow}
        />
        <Resource
          name="HealthArea"
          list={HealthAreaList}
          edit={HealthAreaEdit}
          create={HealthAreaCreate}
          show={HealthAreaShow}
        />
        <Resource
          name="Objective"
          list={ObjectiveList}
          edit={ObjectiveEdit}
          create={ObjectiveCreate}
          show={ObjectiveShow}
        />
        <Resource
          name="Contributor"
          list={ContributorList}
          edit={ContributorEdit}
          create={ContributorCreate}
          show={ContributorShow}
        />
      </Admin>
    </div>
  );
};

export default App;
