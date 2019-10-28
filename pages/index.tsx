import Link from 'next/link';
import Container from '../components/_container';

const Home = () => (<Container>
  <div className='flex flex-col text-center justify-center items-center h-screen'>
    <div className='mt-4'>
      <h2 className='text-lg mb-2'>Example</h2>
      <div className='text-blue-400 flex flex-col'>
        <Link href='/friends'>
          <a>Friends list - using axios to fetch data</a>
        </Link>
        <Link href='/register'>
          <a>Register form - using formik to make our life easier</a>
        </Link>
      </div>
      <div className='mt-10 text-xs'>
        Feel free to add more example page :)
      </div>
    </div>
  </div>
</Container>);

export default Home;
