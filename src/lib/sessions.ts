import { getBookings } from "@/lib/bookings";
import { getSheetData } from "@/lib/sheets";
import { Session, SheetRange } from "@/types";

const spreadsheetId = process.env.SHEET_ID as string;
const sessionRange = process.env.SHEET_SESSION_RANGE as SheetRange;

type SessionRow = [
  Session["id"],
  Session["timeSlot"],
  Session["tableNumber"],
  Session["title"],
  Session["ruleset"],
  Session["masterName"],
  Session["description"],
  Session["minPlayers"],
  Session["maxPlayers"],
];

export const getSessions = async (): Promise<Session[]> => {
  const sessionsResponse = await getSheetData({
    spreadsheetId,
    range: sessionRange,
  });

  if (!sessionsResponse || sessionsResponse.length === 0) {
    throw new Error("No data found");
  }

  const bookings = await getBookings();

  const sessions: Session[] = sessionsResponse
    .slice(1)
    .map((row) => {
      const [
        id,
        timeSlot,
        tableNumber,
        title,
        ruleset,
        masterName,
        description,
        minPlayers,
        maxPlayers,
      ] = row as SessionRow;

      const booked = bookings
        .filter(({ sessionId }) => sessionId === id)
        .reduce((total, { seats }) => total + seats, 0);

      const availableSeats = Math.max(0, maxPlayers - booked);

      return {
        id: id.replace(/\s+/g, ""), // sanification, removes all whitespace from ids
        timeSlot: Number(timeSlot) as Session["timeSlot"],
        tableNumber: Number(tableNumber),
        title,
        ruleset,
        description,
        minPlayers: Number(minPlayers),
        maxPlayers: Number(maxPlayers),
        masterName,
        availableSeats,
      };
    })
    .sort((a, b) => {
      if (a.timeSlot !== b.timeSlot) {
        return a.timeSlot - b.timeSlot;
      }

      if (a.tableNumber !== b.tableNumber) {
        return a.tableNumber - b.tableNumber;
      }

      return a.title.localeCompare(b.title);
    });

  return sessions;
};
