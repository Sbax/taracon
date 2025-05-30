export type TimeSlot = 1 | 2 | 3 | 4 | 5;

type TimeSlotDetails = {
  label: string;
  className: string;
};

export const timeSlots: Record<TimeSlot, TimeSlotDetails> = {
  1: {
    label: "Sabato 10.00 - 13.00",
    className: "timeslot-pink-500",
  },
  2: {
    label: "Sabato 15.00 - 19.00",
    className: "timeslot-fuchsia-500",
  },
  3: {
    label: "Sabato 21.30 - 00.30",
    className: "timeslot-rose-500",
  },
  4: {
    label: "Domenica 10.00 - 13.00",
    className: "timeslot-indigo-500",
  },
  5: {
    label: "Domenica 15.00 - 19.00",
    className: "timeslot-teal-500",
  },
} as const satisfies Record<TimeSlot, TimeSlotDetails>;
