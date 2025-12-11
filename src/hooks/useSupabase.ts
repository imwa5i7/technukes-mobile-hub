// src/hooks/useSupabase.ts
import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';

export interface SupabaseResult<T> {
    data: T[] | null;
    loading: boolean;
    error: string | null;
}

/**
 * Fetch all rows from a given table.
 * @param tableName The Supabase table name (e.g., 'services')
 */
export function useSupabase<T>(tableName: string): SupabaseResult<T> {
    const [data, setData] = useState<T[] | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            // Use non‑generic `from` because the table name is dynamic, then cast the result.
            const { data, error } = await supabase
                .from(tableName)
                .select('*') as unknown as { data: T[] | null; error: any };
            if (error) {
                setError(error.message);
                setData(null);
            } else {
                setData(data);
                setError(null);
            }
            setLoading(false);
        };

        fetchData();
    }, [tableName]);

    return { data, loading, error };
}