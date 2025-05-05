import { ConfirmationEmail } from "@/components/mail/ConfirmationMail";
import { Booking, Session } from "@/types";
import { render } from "@react-email/render";
import { getTranslations } from "next-intl/server";
import { Resend } from "resend";

const resendEnabled = process.env.RESEND_ENABLED;
const resend = new Resend(process.env.RESEND_API_KEY);
const sender = process.env.MAIL_SENDER;

export async function sendConfirmationEmail({
  booking,
  session,
  update,
}: {
  booking: Booking;
  session: Session;
  update?: boolean;
}) {
  const { email } = booking;
  const t = await getTranslations("email");
  if (!resendEnabled) return;

  const subject = update ? t("subject.update") : t("subject.create");

  const emailHtml = await render(
    <ConfirmationEmail subject={subject} booking={booking} session={session} />
  );

  return resend.emails.send({
    from: sender as string,
    to: email,
    subject,
    html: emailHtml,
  });
}
