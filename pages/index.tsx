import Head from "next/head";
import styles from "@/styles/Home.module.css";
import {
  DynamicWidgets,
  InstantSearch,
  RefinementList,
} from "react-instantsearch-hooks-web";
import { createInstantSearchRouterNext } from "react-instantsearch-hooks-router-nextjs";
import singletonRouter from "next/router";
import algoliasearch from "algoliasearch";

export default function Home() {
  const client = algoliasearch("latency", "6be0576ff61c053d5f9a3225e2a90f76");
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <InstantSearch
            routing={{
              router: createInstantSearchRouterNext({
                singletonRouter,
              }),
            }}
            searchClient={client}
            indexName="instant_search"
          >
            <DynamicWidgets
              facets={['*']}
              fallbackComponent={RefinementList}
              maxValuesPerFacet={20}
            />
          </InstantSearch>
        </div>
      </main>
    </>
  );
}
