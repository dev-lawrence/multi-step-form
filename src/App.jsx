import Form from './components/Form';
import { FormProvider } from './FormContext';

const App = () => {
  return (
    <>
      <FormProvider>
        <Form />
      </FormProvider>
    </>
  );
};

export default App;
