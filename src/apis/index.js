import { call, takeEvery, put, takeLeading } from "redux-saga/effects";
import Axios from "axios";
import { fetchData } from "../stores/reducers/todo";
import { sagaActions } from "../stores/actions/saga";

let callAPI = async ({ url, method, data }) => {
    return await Axios({
        url,
        method,
        data
    });
};

export function* fetchDataSaga() {
    try {
        let result = yield call(() =>
            callAPI({ url: "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita" })
        );
        result = result?.data?.drinks?.map(data => ({
            id: `item-${data.idDrink}`,
            name: data.strGlass,
            description: data.strCategory

        }))
        yield put(fetchData(result));
    } catch (e) {
        yield put({ type: "TODO_FETCH_FAILED" });
    }
}

export default function* rootSaga() {
    yield takeLeading(sagaActions.FETCH_DATA_SAGA, fetchDataSaga);
}
