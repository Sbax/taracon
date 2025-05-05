import { Day } from "@/types";

type DayDetails = {
  label: string;
  btnClass: string;
  badgeClass: string;
};

export const days: Record<Day, DayDetails> = {
  1: {
    label: "1 Maggio",
    btnClass: "btn-primary",
    badgeClass: "badge-primary",
  },
  2: {
    label: "2 Maggio",
    btnClass: "btn-secondary",
    badgeClass: "badge-secondary",
  },
} as const satisfies Record<Day, DayDetails>;
