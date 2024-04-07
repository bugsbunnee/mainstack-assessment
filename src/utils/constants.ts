import { SubRoute } from '../models/SubRoute';

import linkInBio from '../assets/link.png';
import store from '../assets/store.png';
import booking from '../assets/booking.png';
import invoicing from '../assets/invoicing.png';

export const CURRENCY = 'USD';
export const SKELETON_LENGTH = [1, 2, 3, 4];
export const SUBROUTES: SubRoute[] = [
    {
        title: 'Link in Bio',
        subtitle: 'Manage your Link in Bio',
        img: linkInBio
    },
    {
        title: 'Store',
        subtitle: 'Manage your store activities',
        img: store
    },
    {
        title: 'Media Kit',
        subtitle: 'Manage your Media Kit',
        img: booking
    },
    {
        title: 'Invoicing',
        subtitle: 'Manage your Invoices',
        img: invoicing
    }
];