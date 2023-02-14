import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import useEventItem from "../hooks/useEventItem";

const regex = { email: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g };

export default function HomeDetail() {
  const { id } = useParams();
  const {
    register,
    watch,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm({ mode: "onSubmit" });
  // const {
  //   register,
  //   reset,
  //   watch,
  //   formState: { errors },
  //   handleSubmit,
  // } = useForm({
  //   mode: "onSubmit",
  //   defaultValues: {
  //     id: "",
  //     userId: 0,
  //     title: "",
  //     body: "",
  //   },
  // });
  useEventItem(reset, id);

  const { id: eventId, userId, title, body } = watch();

  const nameRegister = register("name", {
    required: {
      value: true,
      message: "이름은 필수 값입니다.",
    },
    maxLength: {
      value: 5,
      message: "글자 길이는 최대 5자 입니다.",
    },
  });
  const ageRegister = register("age");
  const sexRegister = register("sex");
  const priceRegister = register("price", {
    required: {
      value: true,
      message: "가격은 필수 값입니다.",
    },
    min: {
      value: 300,
      message: "최소 가격은 300원 입니다.",
    },
  });
  const foodRegister = register("food", {
    required: { value: true, message: "음식은 필수 값 입니다." },
  });

  const onSubmit = (data) => console.log(data);

  const onError = (data) => console.log(data);

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit, onError)}>
        {/* <input value={eventId} />
        <input value={userId} />
        <input value={title} />
        <input value={body} /> */}
        <input placeholder="name" {...nameRegister} />
        <input placeholder="age" {...ageRegister} />
        <input placeholder="sex" {...sexRegister} />
        <input type="number" placeholder="0" {...priceRegister} />
        <label>
          <input name="food" type="radio" {...foodRegister} value="피자" />
          피자
        </label>
        <label>
          <input name="food" type="radio" {...foodRegister} value="햄버거" />
          햄버거
        </label>
        <label>
          <input name="food" type="radio" {...foodRegister} value="치킨" />
          치킨
        </label>
        <button type="submit">버튼</button>
      </form>

      {errors && <div>{errors?.name?.message}</div>}
      {errors && <div>{errors?.price?.message}</div>}
      {errors && <div>{errors?.food?.message}</div>}
    </div>
  );
}
