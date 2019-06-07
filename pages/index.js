import React from 'react';
import Link from 'next/Link';
import Layout from '../components/Layout';

const PostLink = props => (
    <li>
        <Link href={`/post?title=${props.title}`}>
            <a>{props.title}</a>
        </Link>
    </li>
)

const Index = () => (
    <div>
        <Layout>
            <h1>My Blog</h1>
            <ul>
                <PostLink title="Hello Next.js"/>
                <PostLink title="Learn Next.js is awesome"/>
                <PostLink title="Deploy apps with Zeit"/>
            </ul>
        </Layout>
    </div>
);

export default Index;
