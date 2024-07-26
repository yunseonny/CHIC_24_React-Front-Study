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

- 코드 해설
  * 클래스형 컴포넌트:
    상태 관리: this.state를 사용하여 isOnline 상태를 관리합니다.
    구독 설정: componentDidMount 메서드에서 ChatAPI.subscribeToFriendStatus를 호출하여 친구의 상태를 구독합니다.
    구독 해제: componentWillUnmount 메서드에서 ChatAPI.unsubscribeFromFriendStatus를 호출하여 친구의 상태 구독을 해제합니다.
    상태 변경 처리: handleStatusChange 메서드에서 상태가 변경될 때 this.setState를 사용하여 isOnline 상태를 업데이트합니다.
    렌더링: render 메서드에서 isOnline 상태에 따라 "Loading...", "Online" 또는 "Offline"을 표시합니다.
  * 함수형 컴포넌트:
    상태 관리: useState 훅을 사용하여 isOnline 상태를 관리합니다.
    구독 설정 및 해제: useEffect 훅을 사용하여 컴포넌트가 마운트될 때 ChatAPI.subscribeToFriendStatus를 호출하고, 언마운트되기 전에 ChatAPI.unsubscribeFromFriendStatus를 호출하여 친구의 상태 구독을 해제합니다.
    상태 변경 처리: handleStatusChange 함수에서 상태가 변경될 때 setIsOnline을 사용하여 isOnline 상태를 업데이트합니다.
    렌더링: isOnline 상태에 따라 "Loading...", "Online" 또는 "Offline"을 표시합니다.
    
- 빈칸1 해설: 클래스형 컴포넌트에서는 this.state를 사용하여 isOnline 상태를 관리하지만, 함수형 컴포넌트에서는 useState 훅을 사용하여 isOnline 상태를 관리한다. 따라서 useState가 들어가야한다.
- 빈칸2 해설: 클래스형 컴포넌트에서는,
  * componentDidMount 메서드에서 ChatAPI.subscribeToFriendStatus를 호출하여 친구의 상태를 구독한다.
  * componentWillUnmount 메서드에서 ChatAPI.unsubscribeFromFriendStatus를 호출하여 친구의 상태 구독을 해제한다.

  하지만 함수형 컴포넌트에서는,
  구독 설정 및 해제: useEffect 훅을 사용하여 컴포넌트가 마운트될 때 ChatAPI.subscribeToFriendStatus를 호출하고, 언마운트되기 전에 ChatAPI.unsubscribeFromFriendStatus를 호출하여 친구의 상태 구독을 해제한다.<br>
  useEffect가 componentDidMount 메서드, componentWillUnmount 메서드의 역할을 동시에 수행한다고 볼 수 있다.

- 빈칸3 해설: useEffect 훅은 첫 번째 인자로는 상태가 변경될 시 실행될 콜백함수를 받고 두 번째 인자로는 의존성 배열을 받는다. 이 배열에 포함된 값이 변경될 때마다 (즉 상태가 변할때마다) useEffect가 재실행됩니다.
  따라서 배열에는 변화될 값이 들어가야 한다. => [props.friend.id]

