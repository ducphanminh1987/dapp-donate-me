"use client"; // this is a client component

const timeDoubleToString = (time) => new Date(time).toUTCString();

export default function Memos({ memos }) {
  return (
    <fieldset className="memos">
      <legend>Donations</legend>
      {memos.map((m) => (
        <div className="memo">
          <div className="from">thanks to {m.name}</div>
          <div className="time">{timeDoubleToString(m.time)}</div>
          <p className="message">
            who donated {m.tip}ETH with message:
            <span className="quote">{m.message}</span>
          </p>
        </div>
      ))}
    </fieldset>
  );
}
