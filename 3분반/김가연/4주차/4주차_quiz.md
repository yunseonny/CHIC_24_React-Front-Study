* 아래 코드는 친구의 온라인 상태를 구독하고 구독 해제하며, 해당 상태를 표시하는 클래스형 컴포넌트와 같은 기능을 수행하는 함수형 컴포넌트식이다. 빈칸을 채우시오.

```
//클래스형 컴포넌트

import React from "react";
import ChatAPI from "./ChatAPI";

class FriendStatus extends React.Component {
  constructor(props) {
    super(props);
    // 초기 state 설정
    this.state = { isOnline: null };
    // 메서드 바인딩
    this.handleStatusChange = this.handleStatusChange.bind(this);
  }

  // 컴포넌트가 마운트되었을 때 호출
  componentDidMount() {
    // 친구의 상태를 구독
    ChatAPI.subscribeToFriendStatus(
      this.props.friend.id,
      this.handleStatusChange
    );
  }

  // 컴포넌트가 언마운트될 때 호출
  componentWillUnmount() {
    // 친구의 상태 구독 해제
    ChatAPI.unsubscribeFromFriendStatus(
      this.props.friend.id,
      this.handleStatusChange
    );
  }

  // 친구의 상태가 변경되었을 때 호출될 메서드
  handleStatusChange(status) {
    // state 업데이트
    this.setState({
      isOnline: status.isOnline,
    });
  }

  // 렌더링 메서드
  render() {
    // isOnline 상태가 null인 경우 로딩 메시지 표시
    if (this.state.isOnline === null) {
      return "Loading...";
    }
    // isOnline 상태에 따라 온라인 또는 오프라인 메시지 표시
    return this.state.isOnline ? "Online" : "Offline";
  }
}

export default FriendStatus;

```

```
//함수형 컴포넌트

import React, { <빈칸1>, <빈칸2> } from "react";
import ChatAPI from "./ChatAPI";

function FriendStatus(props) {
  // isOnline이라는 state 변수를 선언하고, 초기값을 null로 설정
  const [isOnline, setIsOnline] = <빈칸1>(null);

  // <빈칸2> 훅 사용하여 컴포넌트가 마운트되거나 업데이트될 때 실행되는 코드를 정의
  <빈칸2>(() => {
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
  }, <빈칸3>); // 의존성 배열에 <빈칸3>를 추가하여 해당 값이 변경될 때만 effect를 재실행

  // isOnline 상태가 null인 경우 로딩 메시지 표시
  if (isOnline === null) {
    return 'Loading...';
  }
  // isOnline 상태에 따라 온라인 또는 오프라인 메시지 표시
  return isOnline ? 'Online' : 'Offline';
}

export default FriendStatus;
```
