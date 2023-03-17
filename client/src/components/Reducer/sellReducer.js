const sellReducer = (state, action) => {

    if (action.type === "INITIAL_STATE") {
        return ({
            ...state,
            category: "Mobile",
            title: "",
            brand: "",
            description: "",
            price: 0,
            image1: "",
            image2: "",
            image3: "",
            state: "",
            city: "",
            seller: "",
            contact: "",
        })
    }

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

    if (action.type === "ONCHANGE_STATE") {
        return ({ ...state, state: action.payload.target.value })
    }

    if (action.type === "ONCHANGE_CITY") {
        return ({ ...state, city: action.payload.target.value })
    }

    if (action.type === "ONCHANGE_SELLER") {
        return ({ ...state, seller: action.payload.target.value })
    }

    if (action.type === 'ONCHANGE_CONTACT') {
        return ({ ...state, contact: action.payload.target.value })
    }

    if (action.type === "IMAGE_URL1") {
        return ({ ...state, image1: action.payload })
    }
    if (action.type === "IMAGE_URL2") {
        return ({ ...state, image2: action.payload })
    }
    if (action.type === "IMAGE_URL3") {
        return ({ ...state, image3: action.payload })
    }

};


export default sellReducer;