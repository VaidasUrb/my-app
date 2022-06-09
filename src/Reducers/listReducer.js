import rand from "../Functions/rand";
import randColor from "../Functions/randColor";

function listReducer(state, action) {
    let newState;
    switch (action.type) {
        case 'new_list':
            newState = [...Array(10)].map((_, i) => ({ number: rand(100, 999), color: randColor(), show: true, row: i }));
            break;
        case 'sort_list':
            newState = [...state].sort((a, b) => b.number - a.number);
            break;
        case 'def_sort_list':
            newState = [...state].sort((a, b) => a.row - b.row);
            break;
        case 'add_list':
            newState = [...state, { number: rand(100, 999), color: 'black' }];
            break;
        case 'filter_list':
            // newState = state.filter(e => e.number > 500);
            newState = state.map(e => e.number > 500 ? { ...e, show: true } : { ...e, show: false })
            break;
        case 'filterLess_list':
            //newState = state.filter(e => e.number < 400);
            newState = state.map(e => e.number < 400 ? { ...e, show: true } : { ...e, show: false })
            break;
        case 'showAll_list':
            newState = state.map(e => ({ ...e, show: true }));
            break;
        case 'input_filter_list':
            newState = state.map(e => e.number > action.payload ? { ...e, show: true } : { ...e, show: false })
            break;
        default:
            newState = [...state];
    }
    return newState;
}

export default listReducer;