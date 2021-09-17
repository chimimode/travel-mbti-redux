// reducer가 많아지면 action상수가 중복될 수 있으니
// 액션이름 앞에 파일 이름을 넣습니다.
export const INCRESE = "COUNT/INCRESE";
export const DECRESE = "COUNT/DECRESE";
export const ADD = "COUNT/ADD";

export const increseCount = count => ({ type: INCRESE, count });
export const decreseCount = count => ({ type: DECRESE, count });

// export const addResult = addResult => ({ type: ADD, result });

const initalState = {
  count: 0
};

const nowPage = {
  page: 2
};


const result = { };

const counter = (state = initalState, action) => {
  switch (action.type) {
    case INCRESE:
      return {
        ...state,
        count: action.count
      };

      case DECRESE:
      return {
        ...state,
        count: action.count
      };


    // default를 쓰지 않으면 맨처음 state에 count값이 undefined가 나옵니다 꼭! default문을 넣으세요
    default:
      return state;
  }
};

// const score = (state = result, action) => {
//   switch (action.type) {
//     case'E': 
//     return {
//       ...state,
//       result: action.addResult
//     };

//     case'I': 
//     return {
//       ...state,
//       result: action.addResult
//     };
//   }
// };

export default counter;