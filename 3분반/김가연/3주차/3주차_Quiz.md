## 1. Redux가 있는 경우 / 없는 경우 차이점 설명하시오.

## 2. UpdateContent.js 코드 문제
```
<form
          action="/create_process"
          method="post"
          onSubmit={function (e) {
            e.preventDefault();
            this.props.onSubmit(
              this.state.id,
              this.state.title,
              this.state.desc
            );
          }.bind(this)}
        >
        <input type="" name="id" value={this.state.id}></input> {/* type=""에 들어갈 키워드 맞추기, 왜 그 키워드를 써야 하는지 이유설명 */}
          <p>
            <input type="text"
                name="title"
                placeholder="title"
                value={this.state.title}
                onChange={this.inputFormHandler}>
            </input> {/* OnChange를 사용해서 props 값을 할당해야 하는 이유*/}
          </p>
          <textarea
            name="desc"
            placeholder="description"
            value={this.state.desc}
            onChange={this.inputFormHandler}>
          </textarea>
          <p>
            <input type="submit"></input>
          </p>
        </form>
```
   
