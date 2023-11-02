import {configureStore} from '@reduxjs/toolkit'
import DetailItem from './slice/DetailItem';
import Message from './slice/Message';
import Table from './slice/Table'
import Items from './slice/Items';

const store = configureStore({
    reducer : {
        detailItem : DetailItem,
        message : Message,
        table : Table,
        items : Items
    }

})


export {store};