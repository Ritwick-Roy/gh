import Header from './components/Header';
import Clients from './components/Clients';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import {getBackendUrl} from './utils';

const cache = new InMemoryCache({
  typePolicies:{
    Query: {
      fields: {
        clients: {
          merge(existing,incoming) {
            return incoming;
          }
        },
        projects: {
          merge(existing,incoming) {
            return incoming;
          }
        },
      }
    }
  }
})

const client = new ApolloClient({
  uri:getBackendUrl(),
  cache
})

function App() {
  return (
    <div className="App">
      <ApolloProvider client={client}>
        <Header/>
        <div className='container'>
          <Clients/>
        </div>
      </ApolloProvider>
    </div>
  );
}

export default App;