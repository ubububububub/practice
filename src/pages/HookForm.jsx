import React, { useId } from "react";
import { useForm } from "react-hook-form";

export default function HookForm() {
  const id = useId();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const nameRegister = register("name", {
    required: { value: true, message: "이름은 필수 값 입니다." },
  });
  const ageRegister = register("age", {
    required: { value: true, message: "나이는 필수 값 입니다." },
    max: { value: 20, message: "최대값은 20입니다." },
    maxLength: { value: 1, message: "최대길이는 1입니다." },
  });
  const sleepRegister = register("sleep", {
    required: { value: true, message: "취침 시간은 필수 값 입니다." },
  });
  const sexRegister = register("sex", {
    required: { value: true, message: "성별은 필수 값 입니다." },
  });
  const hobbyRegister = register("hobby", {
    required: { value: true, message: "취미는 필수 값 입니다." },
  });
  const descRegister = register("desc", {
    required: { value: true, message: "설명은 필수 값 입니다." },
  });

  const onSubmit = (data) => console.log(data);
  const onError = (error) => console.log(error);

  return (
    <form onSubmit={handleSubmit(onSubmit, onError)}>
      <fieldset style={{ marginBottom: "8px" }}>
        <label htmlFor={`${id}-name`}>이름</label>
        <input type="text" id={`${id}-name`} {...nameRegister} />
        <div>{errors.name && errors.name.message}</div>
      </fieldset>
      <fieldset style={{ marginBottom: "8px" }}>
        <label htmlFor={`${id}-age`}>나이</label>
        <input type="number" id={`${id}-age`} {...ageRegister} />
        <div>{errors.age && errors.age.message}</div>
      </fieldset>
      <fieldset style={{ marginBottom: "8px" }}>
        <label htmlFor={`${id}-sleep`}>취침 시간</label>
        <select id={`${id}-sleep`} {...sleepRegister} defaultValue={"22"}>
          <option value="" selected disabled hidden>
            시간 선택
          </option>
          <option value="22">22:00</option>
          <option value="23">23:00</option>
          <option value="0">00:00</option>
          <option value="1">01:00</option>
          <option value="2">02:00</option>
        </select>
        <div>{errors.sleep && errors.sleep.message}</div>
      </fieldset>
      <fieldset style={{ marginBottom: "8px" }}>
        <label htmlFor={`${id}-mail`}>남자</label>
        <input
          id={`${id}-mail`}
          type="radio"
          name="sex"
          value="mail"
          {...sexRegister}
        />
        <label htmlFor={`${id}-femail`}>여자</label>
        <input
          id={`${id}-femail`}
          type="radio"
          name="sex"
          value="femail"
          {...sexRegister}
        />
        <div>{errors.sex && errors.sex.message}</div>
      </fieldset>{" "}
      <fieldset style={{ marginBottom: "8px" }}>
        <label htmlFor={`${id}-hobby`}>운동</label>
        <input
          id={`${id}-hobby`}
          type="checkbox"
          name="hobby"
          value="exercise"
          defaultChecked={true}
          {...hobbyRegister}
        />
        <label htmlFor={`${id}-hobby`}>음악감상</label>
        <input
          id={`${id}-hobby`}
          type="checkbox"
          name="hobby"
          value="music"
          defaultChecked={true}
          {...hobbyRegister}
        />
        <label htmlFor={`${id}-hobby`}>영화관람</label>
        <input
          id={`${id}-hobby`}
          type="checkbox"
          name="hobby"
          value="movie"
          {...hobbyRegister}
        />
        <div>{errors.hobby && errors.hobby.message}</div>
      </fieldset>
      <fieldset>
        <label htmlFor={`${id}-desc`}>설명</label>
        <textarea id={`${id}-desc`} {...descRegister} />
        <div>{errors.desc && errors.desc.message}</div>
      </fieldset>
      <button type="submit">버튼</button>
    </form>
  );
}
