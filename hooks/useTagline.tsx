import useSWR from 'swr';

export type TaglineResponse = {
    data: {
        tagline: string;
    } | null;
    loading: boolean;
    error: boolean;
    regenerate: () => void;
}

export const useTagline = (): TaglineResponse => {

    const fetcher = (url: string) => fetch(url).then(r => r.json());
    const req = useSWR('/api/tagline', fetcher);

    if (req.data) return {
        data: req.data,
        loading: false,
        error: false,
        regenerate: () => req.revalidate()
    }

    return {
        data: null,
        loading: !req.data && !req.error,
        error: req.error,
        regenerate: () => req.revalidate()
    }

}