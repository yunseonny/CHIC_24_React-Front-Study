QUIZ

---

1.

다음은 date 표시 기능 구현을 위해 변수를 선언하고 할당하는 과정이다. 빈칸을 채우세요

```
var [_date, setDate] = ________(new Date().toString());
```

---

2.

skipping effect는 성능을 위해 effect 호출을 생략하는 기법이다. 
skipping effect 구현을 위해 사용되는 이 함수는 state가 바뀔 때마다 이전 props 값과 이전 state 값을 인자로 전달한다. 이를 이용해 함수가 전달해 값을 변경된 값과 비교해 서로 다를 때에만 작업을 처리하도록 할 수 있다. 이 함수는?

```
  useEffect(
    function () {
      console.log(
        "%cfunc => useEffect number (componentDidMount & _________________)" +
          ++funcId,
        funcStyle
      );
      document.title = number;
      return function () {
        console.log(
          "%cfunc => useEffect number return (componentDidMount & _________________)" +
            ++funcId,
          funcStyle
        );
      };
    },
    [number]
  );
```
