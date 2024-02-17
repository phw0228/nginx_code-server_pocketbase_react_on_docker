import React, { useState, useEffect } from 'react';
import PocketBase from 'pocketbase';

const pb = new PocketBase('http://localhost:8090/');

function UserDetail() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    async function fetchUserData() {
      try {
        // ID 값이 'mj0jm9veamy8huk'인 사용자의 데이터 조회
        const record = await pb.collection('users').getFirstListItem('id="bwinwr8c7i6m63n"', {
          expand: 'email,name,username', // 필요한 필드를 expand 옵션에 명시
        });
        setUser(record);
      } catch (error) {
        console.error("Failed to fetch user data:", error);
        setError("Failed to fetch user data.");
      }
    }

    fetchUserData();
  }, []); // 컴포넌트 마운트 시 한 번만 실행

  if (error) {
    return <p>{error}</p>;
  }

  if (!user) {
    return <p>Loading user data...</p>;
  }

  return (
    <div>
      <h1>Username: {user.username}</h1>
      {/* 사용자의 나이 대신 사용자 이름을 표시 */}
      <p>Name: {user.name}</p>
    </div>
  );
}

export default UserDetail;


