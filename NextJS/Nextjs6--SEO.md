# Improve SEO
We can define metadata in 2 ways: Static and Dynamic 

To edit it statically, we can make a page like normal, then define metadata in the same file. 

    // Inside page.js
    export const metadata = {
      title: 'Home',
    };
    // Output: 
    // <head>
    //    <title>Home</title>
    // </head>

    export default function Page() {
      return (
        <h1>My Normal Next.js Page with Static Metadata
      )
    }

To make it dynamic, it'll look like this: 

    // Inside page.js 
    export async function generateMetadata({ params, searchParams}) {
      const product = await getProduct(params.id);
      return {title: product.title}
    };

    // Output:
    // <head>
    //    <title>My Unique Product</title>
    // </head> 

    export default function Page() {
      return (
        <h1>My Normal Next.js Page with Dynamic Metadata</h1>
      )
    }