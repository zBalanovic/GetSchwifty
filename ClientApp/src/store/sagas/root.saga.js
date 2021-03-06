import { all, takeEvery } from 'redux-saga/effects';
import { REQUEST_PLACES, GET_PLACE } from '../actions/place.actions';
import { fetchPlaces, fetchPlace } from './place.saga';
import { REQUEST_BANDS, GET_BAND } from '../actions/band.actions';
import { fetchBands, fetchBand } from './band.saga';
import { ADD_REVIEW_BAND, ADD_REVIEW_PLACE } from '../actions/review.actions';
import { postBandReview, postPlaceReview } from './review.saga';

export function* rootSaga () {
    yield all (
        [
            takeEvery(REQUEST_PLACES, fetchPlaces),
            takeEvery(REQUEST_BANDS, fetchBands),
            takeEvery(GET_PLACE, fetchPlace),
            takeEvery(GET_BAND, fetchBand),
            takeEvery(ADD_REVIEW_BAND, postBandReview),
            takeEvery(ADD_REVIEW_PLACE, postPlaceReview)        
        ]
    )
}