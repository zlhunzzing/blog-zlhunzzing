import { createAction } from 'redux-actions';
import moment from "moment";

const OPEN_MODAL = 'App/Handle/OPEN_MODAL';
const CLOSE_MODAL = 'App/Handle/CLOSE_MODAL';

export const open_modal = createAction(OPEN_MODAL);
export const close_modal = createAction(CLOSE_MODAL);

const initialState = {
  isModal: false,
  momenter: (time: any, format: string) => {
    // foramt example : "YYYY.MM.DD HH:mm"
    return moment(new Date(time)).format(format);
  },
  paging: (data: any, listSize: number) => {
    let pagingData = [];
    let onePageData = [];
    for (let i = data.length - 1; i >= 0; i--) {
      onePageData.push(data[i]);
      if (onePageData.length === listSize) {
        pagingData.push(onePageData);
        onePageData = [];
      }
    }
    if (onePageData.length !== 0) {
      pagingData.push(onePageData);
    }
    return pagingData
  },
  ranging: (dataLength: any, rangeSize: number) => {
    let rangingData = [];
    let oneRangeData = [];
    for (let i = 1; i < dataLength + 1; i++) {
      oneRangeData.push(i);
      if (oneRangeData.length === rangeSize) {
        rangingData.push(oneRangeData);
        oneRangeData = [];
      }
    }
    if (oneRangeData.length !== 0) {
      rangingData.push(oneRangeData);
    }
    return rangingData;
  },
};

export default function Handle(state: any = initialState, action: any) {
  switch (action.type) {
    case OPEN_MODAL:
      return {
        ...state,
        isModal: true,
      };
    case CLOSE_MODAL:
      return {
         ...state,
         isModal: false,
      };
    default:
      return state;
  }
}
