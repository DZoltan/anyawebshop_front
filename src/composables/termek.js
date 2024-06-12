import Axios from "axios";

export function useTermekek() {

    const getTermekekByCategory = async function(categoryId) {
        return Axios.get('http://127.0.0.1:3000/termek/category/' + categoryId)
            .then(response => response)
            .catch(error => error?.data)
    }

    return {
        getTermekekByCategory
    }
}