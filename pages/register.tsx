import Container from '../components/_container';
import { Formik, Field } from 'formik';
import { TextField } from '../components/fields';

const initialValue = {
  username: '',
  email: '',
  password: '',
};

const Register = () => {
  
  const onSubmit = (values) => {
    console.log(values)
  };

  return (<Container>
    <div className='flex flex-col w-screen h-screen justify-center items-center'>
      <h2 className='text-xl font-bold mb-6 text-center'>Register Now</h2>
      <div className='rounded flex p-6 shadow-lg w-full md:w-1/4'>
        <div className='flex flex-col w-full'>
          <Formik initialValues={initialValue} onSubmit={onSubmit}>
            {({ handleSubmit }) => {
              return (<form onSubmit={handleSubmit}>
                <Field name='username' component={TextField} placeholder='Username' label='Username' />
                <Field name='email' component={TextField} placeholder='Email' label='Email' />
                <Field name='password' component={TextField} placeholder='Password' label='Password' />

                <button type='submit' className="btn bg-blue-500 text-white rounded p-2 w-full">
                  Join
                </button>
              </form>)
            }}
          </Formik>
        </div>
      </div>
    </div>

  </Container>)
};

export default Register;