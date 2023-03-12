const sellReducer = (state, action) => {

    if (action.type === "CHAGE_CATEGORY") {
        return ({ ...state, category: action.payload })
    }

    if (action.type === "ONCHANGE_TITLE") {
        return ({ ...state, title: action.payload.target.value })
    }

    if (action.type === "ONCHANGE_BRAND") {
        return ({ ...state, brand: action.payload.target.value })
    }

    if (action.type === "ONCHANGE_DESCRIPTION") {
        return ({ ...state, description: action.payload.target.value })
    }

    if (action.type === "ONCHANGE_PRICE") {
        return ({ ...state, price: action.payload.target.value })
    }

    if (action.type === "ONCHANGE_IMG1") {
        return ({ ...state, image1: action.payload.target.files[0] })
    }

    if (action.type === "ONCHANGE_IMG2") {
        return ({ ...state, image2: action.payload.target.files[0] })
    }

    if (action.type === "ONCHANGE_IMG3") {
        return ({ ...state, image3: action.payload.target.files[0] })
    }


    if (action.type === "ONCHANGE_STATE") {
        return ({ ...state, state: action.payload.target.value })
    }


    if (action.type === "ONCHANGE_CITY") {
        return ({ ...state, city: action.payload.target.value })
    }

};


export default sellReducer;