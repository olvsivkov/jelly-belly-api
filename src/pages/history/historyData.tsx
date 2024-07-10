import {HistoryDataInterface } from "../../interfaces/interfaces";

function HistoryData({ history }: { history: HistoryDataInterface [] }) {
  return (
    <ul>
      {history.map((history) => (
        <li key={history.mileStoneId}>{history.description}</li>
      ))}
    </ul>
  );
}

export default HistoryData