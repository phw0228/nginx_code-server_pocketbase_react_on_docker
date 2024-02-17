import PocketBase from 'pocketbase';

const pb = new PocketBase('https://signforall.kro.kr/pb');

async function fetchUserAge(userId) {
    try {
        // 'users' 콜렉션에서 userId에 해당하는 사용자 레코드를 조회
        const userRecord = await pb.records.getOne('users', userId);
        // userRecord에서 age 필드의 값을 출력
        console.log(`User Age: ${userRecord.age}`);
    } catch (error) {
        console.error("Error fetching user's age:", error);
    }
}

// 함수 호출 예시 - 'user1'의 ID를 사용
fetchUserAge('x3310gue9n16kwp');
