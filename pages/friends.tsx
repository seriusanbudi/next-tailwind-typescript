import React, { useEffect, useState } from 'react';
import Container from '../components/_container';
import { api } from '../utils/request';
import Link from 'next/link';

const Friends = () => {
  const [ isLoading, setIsLoading ] = useState(false);
  const [ users, setUsers ] = useState([]);
  const [ page, setPage ] = useState(1);

  useEffect(() => {
    fetchData(1);
  }, []);

  function fetchData(page: number) {
    setIsLoading(true);

    api().get(`users?page=${page}`).then(res => { 
      const { data } = res.data;
      const temp = [...users, ...data];
      setUsers(temp);
      setIsLoading(false);
      setPage(page);
    }).catch(err => {
      console.log({ err });
    });
  };

  return (<Container>
    <div className='flex flex-col p-10'>
      <h2 className='text-xl font-bold mb-6 text-center'>Friends</h2>
      <div className='text-center text-blue-400'>
        <Link href='/'>Home</Link>
      </div>
      <div className='flex justify-center'>
        <div className='w-full lg:w-1/2'>
          {users.map(user => (<div key={user.id}>
            <div className='m-4 rounded flex p-6 shadow-lg'>
              <img className='w-10 h-10 rounded-full mr-4' src={user.avatar} alt={user.first_name} />
              <div className='flex flex-col'>
                <a>{`${user.first_name} ${user.last_name}`}</a>
                <a href={`mailto:${user.email}`} className='text-gray-400' title='Click to send email'>{`${user.email}`}</a>
              </div>
            </div>
          </div>))}
          {isLoading && <div></div>}
          {users.length > 0 && <div className='w-full text-center mt-10'>
            <a className='text-center text-blue-400' onClick={() => fetchData(page + 1)}>Load more...</a>
          </div>}
        </div>
      </div>
    </div>
  </Container>)
};

export default Friends;