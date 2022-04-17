import {UserName, Password, Name, Gender, Age, Grade, Section, Subject} from './action';

const initState={
    username: "",
    password:"",
    teachername: "",
    gender:"",
    age:"",
    grade:"",
    section:"",
    subject:""
};

export const scheduleReducer= (state=initState, {type, payload})=>{
    switch(type){
        case UserName:
            return {...state, username: payload};
        case Password:
            return {...state, password: payload};
        case Name:
            return {...state, teachername: payload};
        case Gender:
            return {...state, gender: payload};
        case Age:
            return {...state, age: payload};
        case Grade:
            return {...state, grade: payload};
        case Section:
            return {...state, section: payload};
        case Subject:
            return {...state, subject: payload};
        default:
            return state.age;
    }
}