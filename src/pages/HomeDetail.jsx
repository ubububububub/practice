import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import useEventItem from "../hooks/useEventItem";

const regex = { email: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g };

export default function HomeDetail() {
  const { id } = useParams();
  // const {
  //   register,
  //   watch,
  //   reset,
  //   formState: { errors },
  //   handleSubmit,
  // } = useForm({ mode: "onSubmit" });
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
  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm();
  useEventItem(reset, id);

  const nameRegister = register("name", {
    required: { value: true, message: "이름은 필수 값입니다." },
  });

  const onSubmit = (data) => console.log(data);

  const onError = (data) => console.log(data);

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit, onError)}>
        <div>
          <label htmlFor="name">이름</label>
          <input
            id="name"
            placeholder="이름을 입력해주세요."
            {...nameRegister}
          />
        </div>
        {errors.name && <div>{errors.name.message}</div>}
        {/* <input placeholder="age" {...ageRegister} /> */}
        {/* <input placeholder="sex" {...sexRegister} /> */}
        {/* <input type="number" placeholder="0" {...priceRegister} /> */}
        {/* <label>
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
        </label> */}
        <button type="submit">버튼</button>
      </form>
    </div>
  );
}
