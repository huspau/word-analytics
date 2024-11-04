import { FOOTER_COPYRIGHT } from "../lib/constants";
import { daysBetweenLastChecked } from "../lib/utils";

export default function Footer() {
  const numberOfDays = daysBetweenLastChecked();

  return (
    <footer className="footer">
      <small>{FOOTER_COPYRIGHT}</small>
      <small>
        Last checked limits:{" "}
        {numberOfDays > 0 ? `${numberOfDays} day(s) ago` : `Today`}
      </small>
    </footer>
  );
}
