export function userReducer(state, action) {
  switch (action.type) {
    case "changed_name":
      if (action.name.length > 10) {
        return { ...state };
      }

      return {
        ...state,
        name: action.name,
      };
    case "changed_sex":
      return {
        ...state,
        sex: action.sex,
      };
    case "changed_age":
      if (parseInt(action.age) > 20) {
        return { ...state };
      }

      return {
        ...state,
        age: action.age,
      };
    case "changed_hobby":
      if (action.hobby.length > 10) {
        return { ...state };
      }

      return {
        ...state,
        hobby: action.hobby,
      };
    default:
      throw Error("Unknown action: " + action.type);
  }
}
