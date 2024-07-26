* 다음 친구의 온라인 상태를 구독하고 구독 해제하며, 해당 상태를 표시하는 클래스형 컴포넌트를 함수형 컴포넌트식으로 작성하시오.

```
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
