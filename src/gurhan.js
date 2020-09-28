// import userData from "./assets/user";

// export const authenticate = (delayTime, id, password) => {
//     return new Promise((resolve, reject) =>{
//         setTimeout(() => {
//             const targetId = userData.find(user => user.id === id);
//             if (targetId){
//                 if (password === targetId.password){
//                     resolve({
//                         type: "success",
//                         user: targetId.id
//                     });
//                 }else {
//                     reject('Failed');
//                 }
//             }else {
//                 reject('Failed');
//             }
//         }, delayTime);
//     });
// };

//

