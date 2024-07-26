```
import React, { useState, useEffect } from "react";
import ChatAPI from "./ChatAPI";

function FriendStatus(props) {
  // isOnline이라는 state 변수를 선언하고, 초기값을 null로 설정
  const [isOnline, setIsOnline] = useState(null);

  // useEffect 훅 사용하여 컴포넌트가 마운트되거나 업데이트될 때 실행되는 코드를 정의
  useEffect(() => {
    // 상태 변경을 처리하는 함수
    function handleStatusChange(status) {
      setIsOnline(status.isOnline);
    }
    
    // 친구의 상태를 구독
    ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);
    
    // clean-up 함수 반환: 컴포넌트가 언마운트되거나 의존성 배열의 값이 변경되기 전에 실행
    return function cleanup() {
      // 친구의 상태 구독 해제
      ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
    };
  }, [props.friend.id]); // 의존성 배열에 props.friend.id를 추가하여 해당 값이 변경될 때만 effect를 재실행

  // isOnline 상태가 null인 경우 로딩 메시지 표시
  if (isOnline === null) {
    return 'Loading...';
  }
  // isOnline 상태에 따라 온라인 또는 오프라인 메시지 표시
  return isOnline ? 'Online' : 'Offline';
}

export default FriendStatus;
```



