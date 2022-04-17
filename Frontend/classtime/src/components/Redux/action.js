export const UserName= "USERNAME";
export const Password= "PASSWORD";
export const Name= "TEACHERNAME";
export const Gender= "GENDER";
export const Age= "AGE";
export const Grade= "GRADE";
export const Section= "SECTION";
export const Subject= "SUBJECT";


export const username= (payload)=>({
    type: UserName,
    payload
});
export const password= (payload)=>({
    type: Password,
    payload
});
export const name= (payload)=>({
    type: Name,
    payload
});
export const gender= (payload)=>({
    type: Gender,
    payload
});
export const age= (payload)=>({
    type: Age,
    payload
});
export const grade= (payload)=>({
    type: Grade,
    payload
});
export const section= (payload)=>({
    type: Section,
    payload
});
export const subject= (payload)=>({
    type: Subject,
    payload
});