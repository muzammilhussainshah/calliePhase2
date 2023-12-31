import ActionTypes from '../constant/constant';

const INITIAL_STATE = {

    currentUser: null,
    loader: null,

    courseSubject: [],
    selectedSubjectCourses: [],
    courseDataLoader: [],
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ActionTypes.CURRENTUSER:
            return ({
                ...state,
                currentUser: action.payload
            })
        case ActionTypes.LOADER:
            return ({
                ...state,
                loader: action.payload
            })
        case ActionTypes.COURSESUBJECT:
            return ({
                ...state,
                courseSubject: action.payload
            })
        case ActionTypes.SELECTEDSUBJECTCOURSES:
            return ({
                ...state,
                selectedSubjectCourses: action.payload
            })
        case ActionTypes.COURSEDATALOADER:
            return ({
                ...state,
                courseDataLoader: action.payload
            })
        default:
            return state;
    }

}