import React, {Suspense} from 'react';
import {Text} from 'react-native';
import Router from '../Router';
import {BackButton} from 'react-router-native';
import {QueryClient, QueryClientProvider} from 'react-query';

const queryClient = new QueryClient();
const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Suspense fallback={<Text>Loading..</Text>}>
        <BackButton />
        <Router />
      </Suspense>
    </QueryClientProvider>
  );
};

export default App;
