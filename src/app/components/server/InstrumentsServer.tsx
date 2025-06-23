import { createClient } from '../../utils/supabase/server';

export async function InstrumentsServer() {
  const supabase = await createClient();
  const { data: instruments } = await supabase.from("Projects").select();
  
  return (
    <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {instruments?.map((instrument: any) => (
        <div key={instrument.id} className="p-4 border rounded-lg shadow-sm">
          <h3 className="font-semibold">{instrument.title}</h3>
          {instrument.description && (
            <p className="text-sm text-muted-foreground">{instrument.description}</p>
          )}
        </div>
      ))}
    </div>
  );
}
