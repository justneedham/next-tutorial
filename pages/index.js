import React from 'react';
import Link from 'next/Link';
import Layout from '../components/Layout';
import fetch from 'isomorphic-unfetch';

const PostLink = props => (
    <li>
        <Link as={`/p/${props.id}`} href={`/post?title=${props.title}`}>
            <a>{props.title}</a>
        </Link>
    </li>
)

const Index = props => (
    <div>
        <Layout>
            {/*<h1>My Blog</h1>*/}
            {/*<ul>*/}
            {/*    <PostLink id="hello-nextjs" title="Hello Next.js"/>*/}
            {/*    <PostLink id="learn-nextjs" title="Learn Next.js is awesome"/>*/}
            {/*    <PostLink id="deploy-nextjs" title="Deploy apps with Zeit"/>*/}
            {/*</ul>*/}
            <h1>Batman TV Shows</h1>
            <ul>
                {props.shows.map(show => (
                    <li key={show.id}>
                        <Link as={`/p/${show.id}`} href={`/post?id=${show.id}`}>
                            <a>{show.name}</a>
                        </Link>
                    </li>
                ))}
            </ul>
        </Layout>
    </div>
);

Index.getInitialProps = async function() {
    const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
    const data = await res.json();

    console.log(`Show data fetched. Count: ${data.length}`);

    return {
        shows: data.map(entry => entry.show)
    };
};

export default Index;
