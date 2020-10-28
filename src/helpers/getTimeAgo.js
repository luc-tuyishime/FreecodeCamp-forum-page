import moment from "moment";

export const getTimeAgo = (time) => {
  moment.updateLocale("en", {
    relativeTime: {
      future: "in %s",
      past: "%s ago",
      s: (number) => `${number}s ago`,
      ss: "%ds ago",
      m: "1m ago",
      mm: "%dm ago",
      h: "1h ago",
      hh: "%dh ago",
      d: "1d ago",
      dd: "%dd ago",
      M: "a month ago",
      MM: "%d months ago",
      y: "a year ago",
      yy: "%d years ago"
    }
  });

  const secondsPassed = moment().diff(time, "seconds");

  const dayStart = moment().startOf("day").seconds(secondsPassed);

  return secondsPassed > 300
    ? moment(time).fromNow(true)
    : secondsPassed < 60
      ? `${dayStart.format("s")}s ago`
      : `${dayStart.format("m")}m ago`;
};
