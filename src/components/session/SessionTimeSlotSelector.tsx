import { TimeSlot, timeSlots } from "@/utils/timeSlots";
import { useTranslations } from "next-intl";
import { FC } from "react";

type SessionTimeSlotSelectorProps = {
  selectTimeSlot: (timeSlot: TimeSlot | undefined) => void;
  selectedTimeSlot: TimeSlot | undefined;
};

export const SessionTimeSlotSelector: FC<SessionTimeSlotSelectorProps> = ({
  selectTimeSlot,
  selectedTimeSlot,
}) => {
  const t = useTranslations("Components.SessionTimeSlotSelector");

  return (
    <section className="flex md:flex-row flex-col flex-wrap -m-2">
      <button
        onClick={() => selectTimeSlot(undefined)}
        className={`m-2 btn ${!selectedTimeSlot ? "" : "btn-outline"}`}
      >
        {t("allTimeSlots")}
      </button>

      {Object.entries(timeSlots)
        .map(([timeSlot, details]) => ({
          timeSlot: Number(timeSlot) as TimeSlot,
          details,
        }))
        .map(({ timeSlot, details }) => (
          <button
            key={timeSlot}
            onClick={() => selectTimeSlot(timeSlot)}
            className={`m-2 btn btn-timeslot ${details.className} ${
              selectedTimeSlot === timeSlot ? "" : "btn-timeslot-outline"
            }`}
          >
            {details.label}
          </button>
        ))}
    </section>
  );
};
