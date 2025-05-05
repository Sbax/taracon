export type TimeSlot = 1 | 2 | 3 | 4 | 5;

type TimeSlotDetails = {
  label: string;
  className: string;
};

export const timeSlots: Record<TimeSlot, TimeSlotDetails> = {
  1: {
    label: "Saturday 9.00 - 12.00",
    className: "timeslot-pink-500",
  },
  2: {
    label: "Saturday 12.00 - 16.00",
    className: "timeslot-fuchsia-500",
  },
  3: {
    label: "Saturday 16.00 - 20.00",
    className: "timeslot-rose-500",
  },
  4: {
    label: "Sunday 10.00 - 14.00",
    className: "timeslot-indigo-500",
  },
  5: {
    label: "Sunday 14.00 - 18.00",
    className: "timeslot-teal-500",
  },
} as const satisfies Record<TimeSlot, TimeSlotDetails>;
