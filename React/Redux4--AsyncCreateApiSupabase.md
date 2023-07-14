📂 EsportsData

📓 [Helpful Stack Overflow Post](https://stackoverflow.com/questions/70700188/how-to-use-redux-rtk-query-with-supabase)

# Using RTK createApi with Supabase
In `Redux3`, we learned that one of the things createApi needs to work is a `baseQuery`, the part of the url that doesn't change when you do an API call. But what if our fetch is to a database? 

Enter `fakeBaseQuery()`. This comes from RTK and takes the place of our baseQuery.

    import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";
    import { supabase } from "../database/database";

    const fetchEsports = createApi({
        reducerPath: "fetchEsports",
        baseQuery: fakeBaseQuery(),
        ...
    })

Then, you put your supabase call inside of an endpoint 

    endpoints: (builder) ({
        allData: builder.query({
            queryFn: async () => {
                const {data, error} = await supabase.from("esports").select();

                if (error) {
                    throw {error};
                }
                return {data}
            }
        })
    })

And you export it like normal 

    export const {useAllDataQuery, useLazyAllDataQuery} = fetchEsports;
    export default fetchEsports;

You can use these functions in your componenets like we did in `Redux3`. 

You can also add more endpoints to get different data from the database, like this: 

    endpoints: (builder) ({
        allData: builder.query({...}),
        usernameData: builder.query({
            queryFn: async () => {
                const {data, error} = await supabase.from("esports").select("Username");
                // the rest is the same as the above example
            }
        })
    })

Don't forget to update the export!