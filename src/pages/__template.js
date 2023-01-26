import React from 'react';
import Layout from '../components/layouts/default';

export default function Page () {
    return (
        <>
            <h1>Index</h1>
        </>
    );
}

Page.getLayout = function getLayout(page) {
    return (
        <Layout>
            {page}
        </Layout>
    );
};
