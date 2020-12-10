import { ActionTypes } from './actionTypes.js'
import API from 'common/API.js'
/*import auction from 'common/static_data/auction.js';

export const auctionsCurrentSet = (auction) => {
    return {
        type: ActionTypes.BM_AUCTIONS_CURRENT_SET,
        current: auction,
    }
}

export const loadAuctions = () => {
    return (dispatch, getState) => {
         API.get('auctions/current')
         .then((apiResponse) => {
             dispatch(auctionsCurrentSet(apiResponse.data.payload.currentAuction));
         });
    }
}
*/