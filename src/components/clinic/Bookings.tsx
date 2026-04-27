import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { toast } from "sonner";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [deleteId, setDeleteId] = useState<number | null>(null); // ✅ NEW

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    const { data, error } = await supabase
      .from("appointments")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      toast.error("Failed to load bookings ❌");
    } else {
      setBookings(data);
    }
  };
  
  const deleteBooking = async (id: number) => {
    const { error } = await supabase
      .from("appointments")
      .delete()
      .eq("id", id);

    if (error) {
      toast.error("Failed to delete ❌");
    } else {
      toast.success("Booking deleted ✅");
      fetchBookings();
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold text-primary mb-6">
        Appointments
      </h2>

      <div className="overflow-x-auto">
        <table className="w-full border rounded-xl overflow-hidden">
          
          {/* Header */}
          <thead className="bg-primary text-white">
            <tr>
              <th className="p-4 text-left">Name</th>
              <th className="p-4 text-left">Phone</th>
              <th className="p-4 text-left">Date</th>
              <th className="p-4 text-right">Action</th>
            </tr>
          </thead>

          {/* Body */}
          <tbody>
            {bookings.length === 0 ? (
              <tr>
                <td colSpan={4} className="p-6 text-center text-muted-foreground">
                  No bookings yet.
                </td>
              </tr>
            ) : (
              bookings.map((b: any) => (
                <tr key={b.id} className="border-b hover:bg-muted/30 transition">
                  
                  <td className="p-4 font-medium text-primary">
                    {b.name}
                  </td>

                  <td className="p-4">
                    <a
                      href={`tel:${b.phone}`}
                      className="text-primary hover:underline"
                    >
                      {b.phone}
                    </a>
                  </td>

                  <td className="p-4 text-muted-foreground">
                    {new Date(b.date).toLocaleDateString("en-IN", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    })}
                  </td>

                  {/* ✅ UPDATED DELETE BUTTON */}
                  <td className="p-4 text-right">
                    <div className="flex justify-end">
                      <button
                        onClick={() => setDeleteId(b.id)} // ✅ changed
                        className="px-4 py-1.5 rounded-lg bg-red-100 text-red-600 hover:bg-red-500 hover:text-white transition"
                      >
                        Delete
                      </button>
                    </div>
                  </td>

                </tr>
              ))
            )}
          </tbody>

        </table>
      </div>

      {/* ✅ CENTER MODAL */}
      {deleteId && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
          <div className="bg-white rounded-2xl shadow-xl p-6 w-[350px] text-center">
            
            <h3 className="text-lg font-semibold text-primary mb-2">
              Delete booking?
            </h3>

            <p className="text-sm text-muted-foreground mb-6">
              This action cannot be undone
            </p>

            <div className="flex justify-center gap-4">
              <button
                onClick={() => setDeleteId(null)}
                className="px-4 py-2 rounded-lg border"
              >
                Cancel
              </button>

              <button
                onClick={() => {
                  deleteBooking(deleteId);
                  setDeleteId(null);
                }}
                className="px-4 py-2 rounded-lg bg-red-500 text-white hover:bg-red-600"
              >
                Delete
              </button>
            </div>

          </div>
        </div>
      )}
    </div>
  );
};

export default Bookings;