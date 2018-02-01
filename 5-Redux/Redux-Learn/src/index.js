console.log('-index.js-');

import { createStore, combineReducers } from 'redux';

//----------------------------------------------------------------
// Action(s)
const INCREMENT = "increment";
const DECREMENT = "decrement";

const SUBMIT_NEW_REVIEW = "submit_new_review";
const BUY = "buy";
//.........

//----------------------------------------------------------------
// Action creator(s)
function increment(value) {
    return { type: INCREMENT, value }
}
function decrement(value) {
    return { type: DECREMENT, value }
}
function submitNewReview(review) {
    return { type: SUBMIT_NEW_REVIEW, review }
}
//----------------------------------------------------------------
// reducer(s)

function counterReducer(state = { count: 0 }, action) {
    console.log('counterReducer');
    switch (action.type) {
        case INCREMENT:
        case SUBMIT_NEW_REVIEW:
            return Object.assign({}, state, { count: state.count + (action.value || 1) })
        case DECREMENT:
            return Object.assign({}, state, { count: state.count - action.value })
        default:
            return state;
    }
}
function reviewsReducer(state = [], action) {
    console.log('reviewReducer');
    switch (action.type) {
        case SUBMIT_NEW_REVIEW:
            return [...state, action.review]
        default:
            return state;
    }
}
//----------------------------------------------------------------

let rootReducer = combineReducers({
    counter: counterReducer,
    reviews: reviewsReducer
});

//----------------------------------------------------------------

// store
let preloadedState = {
    counter: {
        count: 10
    },
    reviews: [
        { stars: 1, author: 'nag@gmil.com', body: 'test review' }
    ]
};
let store = createStore(rootReducer, preloadedState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


//----------------------------------------------------------------

// View ( NG | React | Jquery | PlainJS )

let incBtn = document.querySelector('.inc')
let decBtn = document.querySelector('.dec')
let dsp = document.querySelector('.dsp')
let newRevBtn = document.querySelector('.newRev')


newRevBtn.addEventListener('click', function () {
    store.dispatch(submitNewReview({ stars: 5, author: '', body: '' }));
});


incBtn.addEventListener('click', function () {
    store.dispatch(increment(1));
});

decBtn.addEventListener('click', function () {
    store.dispatch(decrement(1));
});

store.subscribe(function () {
    let state = store.getState();
    dsp.innerHTML = state.counter.count
});

//----------------------------------------------------------------
