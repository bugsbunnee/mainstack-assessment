import dayjs from "dayjs";
import { CURRENCY } from "./constants";
import { Option } from "../models/Option";

const formatAmount = (amount: number) => {
    return `${CURRENCY} ${amount}`;
};

const formatDate = (date: string | Date, format='DD MMMM, YYYY') => {
    return dayjs(date).format(format);
};

const getOptionIsSelected = (selectedOptions: Option[], option: Option) => {
    return selectedOptions.find((selectedOption) => selectedOption.value === option.value);
};

const getLastSevenDaysDate = () => {
    return dayjs().subtract(7, 'day');
};

const getLastThreeMonthsDate = () => {
    return dayjs().subtract(3, 'month');
};

const getFirstDayInMonth = () => {
   return dayjs().startOf('month');
};

const summarize = (text: string, limit = 55) => {
    if (text.length > limit) {
        return text.substring(0, limit) + '...';
    }

    return text;
}

export { formatAmount, formatDate, getFirstDayInMonth, getOptionIsSelected, getLastSevenDaysDate, getLastThreeMonthsDate, summarize }