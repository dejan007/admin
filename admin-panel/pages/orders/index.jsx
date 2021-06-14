import React from 'react';
import Layout from '../../components/ui/Layout/Layout'
import OrderTable from '../../components/orders/table/orderTable';
import OrdersMap from '../../components/orders/ordersMap/OrdersMap';
export default function Index() {

    return(
        <Layout>
            <OrderTable/>
            <OrdersMap/>
        </Layout>
    )

}