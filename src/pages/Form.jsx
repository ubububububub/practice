import { useId, useState } from "react";

export default function Form() {
  const id = useId();
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [hobby, setHobby] = useState("");
  const [sex, setSex] = useState("");
  const [sports, setSports] = useState({
    soccer: false,
    baseball: false,
    basketball: false,
  });

  // const [name, setName] = useState("김유범");
  // const [age, setAge] = useState("20");
  // const [hobby, setHobby] = useState("music");
  // const [sex, setSex] = useState("mail");
  // const [sports, setSports] = useState({
  //   soccer: true,
  //   baseball: false,
  //   basketball: false,
  // });

  const handleNameChange = ({ target }) => {
    if (target.value.length > 3) {
      return;
    }

    setName(target.value);
  };

  const handleAgeChange = ({ target }) => {
    if (!target.value) {
      setAge("");
      return;
    }

    if (target.value > 20) {
      return;
    }

    setAge(target.value);
  };

  const handleHobbyChange = ({ target }) => {
    setHobby(target.value);
  };

  const handleSexChange = ({ target }) => {
    setSex(target.value);
  };

  const handleSportsChange = ({ target }) => {
    setSports((prev) => ({ ...prev, [target.value]: !prev[target.value] }));
  };

  const handleBtnClick = () => {
    console.log(name);
    console.log(age);
    console.log(hobby);
    console.log(sex);
    console.log(sports);
  };

  return (
    <div>
      <div>
        <label htmlFor={`${id}-nameState`}>이름</label>
        <input
          type="text"
          id={`${id}-nameState`}
          value={name}
          onChange={handleNameChange}
        />
      </div>
      <div>
        <label htmlFor={`${id}-ageState`}>나이</label>
        <input
          type="number"
          id={`${id}-ageState`}
          value={age}
          onChange={handleAgeChange}
        />
      </div>
      <div>
        <label htmlFor={`${id}-hobbyState`}>취미</label>
        <select defaultValue={hobby} onChange={handleHobbyChange}>
          <option value="" disabled hidden>
            선택
          </option>
          <option value="music">음악감상</option>
          <option value="movie">영화관람</option>
        </select>
      </div>
      <div>
        <label htmlFor={`${id}-mail`}>남자</label>
        <input
          type="radio"
          id={`${id}-mail`}
          defaultChecked={sex === "mail"}
          value="mail"
          name="sex"
          onChange={handleSexChange}
        />
        <label htmlFor={`${id}-femail`}>여자</label>
        <input
          type="radio"
          id={`${id}-femail`}
          defaultChecked={sex === "femail"}
          value="femail"
          name="sex"
          onChange={handleSexChange}
        />
      </div>
      <div>
        <label htmlFor={`${id}-soccer`}>축구</label>
        <input
          type="checkbox"
          id={`${id}-soccer`}
          defaultChecked={sports.soccer}
          value="soccer"
          onChange={handleSportsChange}
        />
        <label htmlFor={`${id}-baseball`}>야구</label>
        <input
          type="checkbox"
          id={`${id}-baseball`}
          defaultChecked={sports.baseball}
          value="baseball"
          onChange={handleSportsChange}
        />
        <label htmlFor={`${id}-basketball`}>농구</label>
        <input
          type="checkbox"
          id={`${id}-basketball`}
          defaultChecked={sports.basketball}
          value="basketball"
          onChange={handleSportsChange}
        />
      </div>
      <button type="button" onClick={handleBtnClick}>
        버튼
      </button>
    </div>
  );
}
