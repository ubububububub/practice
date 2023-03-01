import { HomeBorder } from "../components/home/HomeBorder";
import ErrorBoundary from "../components/common/ErrorBoundary";
import { usePostBody } from "../hooks/home/usePostBody";
import { usePostCount } from "../hooks/home/usePostCount";
import { usePostTitle } from "../hooks/home/usePostTitle";
import { useReducer } from "react";
import { userReducer } from "../reducers/userReducer";
import Test from "../components/etc/Test";
import { useRef } from "react";

const initialUserState = {
  name: "",
  sex: "",
  age: 0,
  hobby: "",
};

export default function Home() {
  // const { postTitles, isPostTitlesLoading } = usePostTitle();
  // const { postBodys, isPostBodysLoading } = usePostBody();
  // const { postCount, isPostCountLoading } = usePostCount();

  const [user, dispatch] = useReducer(userReducer, initialUserState);
  const inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(user);
  };

  return (
    <div>
      <h1>Home</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={user.name}
          onChange={({ target }) =>
            dispatch({ type: "changed_name", name: target.value })
          }
        />
        <input
          type="radio"
          checked={user.sex === "mail"}
          onChange={() => dispatch({ type: "changed_sex", sex: "mail" })}
        />
        <input
          type="radio"
          checked={user.sex === "femail"}
          onChange={() => dispatch({ type: "changed_sex", sex: "femail" })}
        />
        <input
          type="number"
          value={user.age}
          onChange={({ target }) =>
            dispatch({ type: "changed_age", age: target.value })
          }
        />
        <input
          type="text"
          value={user.hobby}
          onChange={({ target }) =>
            dispatch({ type: "changed_hobby", hobby: target.value })
          }
        />
        <button type="submit">버튼</button>
      </form>
      <Test />
      <ErrorBoundary>
        <button type="button" onClick={() => inputRef.current.customFocus()}>
          포커스 버튼
        </button>
        <button type="button" onClick={() => inputRef.current.customBlur()}>
          블러 버튼
        </button>
        <HomeBorder a={5} ref={inputRef} />
      </ErrorBoundary>
    </div>
  );
}
