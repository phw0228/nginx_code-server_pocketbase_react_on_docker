import React, { useState, useEffect } from 'react';
import PocketBase from 'pocketbase';

const pb = new PocketBase('https://signforall.kro.kr/pb/');

function UserName() {
  const [name, setName] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    async function fetchUserName() {
      try {
        // 고유 ID를 사용하여 사용자 정보 조회
        const record = await pb.collection('users').getOne('bwinwr8c7i6m63n');
        // name 정보 설정
        setName(record.name);
      } catch (err) {
        console.error("Failed to fetch user's name:", err);
        setError("Failed to fetch user's name");
      }
    }

    fetchUserName();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>User Name</h1>
      {name ? <p>The age of the user is: {name}</p> : <p>Loading...</p>}
    </div>
  );
}

export default UserName;
