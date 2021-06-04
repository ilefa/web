import useSWR from 'swr';

export type TaglineResponse = {
    data: {
        tagline: string;
    } | null;
    isLoading: boolean;
    isError: boolean;
}

export const useTagline = (): TaglineResponse => {

    const fetcher = (url: string) => fetch(url).then(r => r.json());
    const { data, error } = useSWR('/api/tagline', fetcher);

    if (data) return {
        data,
        isLoading: false,
        isError: false
    }

    return {
        data: null,
        isLoading: !data && !error,
        isError: error
    }

}