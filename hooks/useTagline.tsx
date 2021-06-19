import useSWR from 'swr';

export type TaglineResponse = {
    data: {
        tagline: string;
    } | null;
    isLoading: boolean;
    isError: boolean;
    regenerate: () => void;
}

export const useTagline = (): TaglineResponse => {

    const fetcher = (url: string) => fetch(url).then(r => r.json());
    const req = useSWR('/api/tagline', fetcher);

    if (req.data) return {
        data: req.data,
        isLoading: false,
        isError: false,
        regenerate: () => req.revalidate()
    }

    return {
        data: null,
        isLoading: !req.data && !req.error,
        isError: req.error,
        regenerate: () => req.revalidate()
    }

}