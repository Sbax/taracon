import { Booking, Session } from "@/types";
import { timeSlots } from "@/utils/timeSlots";
import {
  Body,
  Container,
  Head,
  Html,
  Markdown,
  Preview,
} from "@react-email/components";
import fs from "fs";
import { getLocale } from "next-intl/server";
import path from "path";
import * as React from "react";

const baseUrl = process.env.BASE_URL;

interface ConfirmationEmailProps {
  subject: string;
  booking: Booking;
  session: Session;
}

function loadMarkdownTemplate(): string {
  const filePath = path.join(process.cwd(), "messages/confirmation-email.md");
  return fs.readFileSync(filePath, "utf8");
}

function interpolateMarkdown(
  template: string,
  variables: Record<string, string | number>
) {
  return template.replace(/{{(.*?)}}/g, (_, key) =>
    String(variables[key.trim()] ?? "")
  );
}

export const ConfirmationEmail: React.FC<ConfirmationEmailProps> = async ({
  subject,
  booking,
  session,
}) => {
  const locale = await getLocale();
  const { name, seats, id: bookingId } = booking;
  const { title, timeSlot } = session;

  const selectedTimeSlot = timeSlots[timeSlot].label;
  const mail = process.env.MAIL_CONTACT || "";
  const bookingLink = `${baseUrl}/bookings/${bookingId}`;

  const rawMarkdown = loadMarkdownTemplate();
  const markdownContent = interpolateMarkdown(rawMarkdown, {
    name,
    seats,
    title,
    selectedTimeSlot,
    bookingLink,
    mail,
  });

  console.log(markdownContent);

  return (
    <Html lang={locale}>
      <Head />
      <Preview>{subject}</Preview>
      <Body style={{ fontFamily: "Arial, sans-serif", lineHeight: "1.4" }}>
        <Container>
          <Markdown>{markdownContent}</Markdown>
        </Container>
      </Body>
    </Html>
  );
};
