// @ts-nocheck
export const load = async ({ fetch, params }) => {
    return {
        PK_STRIPE: import.meta.env.STRIPE_TEST_PUBLIC_KEY
    }

} 