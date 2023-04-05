import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./views/Home";
import Project from "./views/Project";
import EditProjectForm from "./views/Edit";
// import UpdateClient from "./components/UpdateClient";
import Client from "./views/Client";
import EditClient from "./views/EditClient";
import NotFound from "./views/NotFound";

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        clients: {
          merge(existing, incoming) {
            return incoming;
          },
        },
        projects: {
          merge(existing, incoming) {
            return incoming;
          },
        },
      },
    },
  },
});

const client = new ApolloClient({
  uri: "http://localhost:5000/graphql",
  cache,
});

const App = () => {
  return (
    <>
      <ApolloProvider client={client}>
        <BrowserRouter>
          <Header />
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/project/:id" element={<Project />} />
              {/*  */}
              <Route path="/editProject/:id" element={<EditProjectForm />} />
              {/*  */}
              <Route path="/client/:id" element={<Client />} />
              <Route path="/editClient/:id" element={<EditClient />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </BrowserRouter>
      </ApolloProvider>
    </>
  );
};

export default App;
