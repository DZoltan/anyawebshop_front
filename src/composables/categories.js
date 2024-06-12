import Axios from "axios";

export function useCategories() {

    const getAllCategories = async function () {
        return Axios.get('http://127.0.0.1:3000/category')
            .then(response => response)
            .catch(error => error?.data)
    }

    const getCategoryByUrl = async function (categoryUrl) {
        return Axios.get('http://127.0.0.1:3000/category/url/' + categoryUrl)
            .then(response => response)
            .catch(error => error?.data)
    }

    return {
        getAllCategories,
        getCategoryByUrl
    }
}