import React, { useContext } from "react";
import DownloadActiveContext from "../context/DownloadIsActive";

const Download = ({ data }) => {
  const { downloadActive, changeDownloadActive } = useContext(
    DownloadActiveContext
  );

  // export json
  function exportJsonData() {
    let dataStr = JSON.stringify(data);
    let dataUri =
      "data:application/json;charset=utf-8," + encodeURIComponent(dataStr);

    let exportFileDefaultName = "data.json";

    let linkElement = document.createElement("a");
    linkElement.setAttribute("href", dataUri);
    linkElement.setAttribute("download", exportFileDefaultName);
    linkElement.click();
  }

  return (
    <div className="download">
      <div
        className="elm-back"
        onClick={() => changeDownloadActive(false)}
      ></div>
      <div className="elm-content">
        <div className="actions">
          <div className="json elm" onClick={() => exportJsonData()}>
            JSON
          </div>
          <div className="csv elm">CSV</div>
        </div>

        <div className="info">
          <h3>You'll get:</h3>
          <p>(custom export coming soon)</p>

          <div className="different">
            <div className=" data">
              <h4>Compute</h4>
              <ul>
                <li>Provider</li>
                <li>Product Name</li>
                <li>RAM</li>
                <li>CPU</li>
                <li>Prices</li>
                <li>Storage Volume</li>
              </ul>
            </div>
            <div className=" data">
              <h4>Database</h4>
              <ul>
                <li>Provider</li>
                <li>Product Name</li>
                <li>RAM</li>
                <li>CPU</li>
                <li>Prices</li>
                <li>Storage Volume</li>
              </ul>
            </div>
            <div className=" data">
              <h4>Storage</h4>
              <ul>
                <li>Provider</li>
                <li>Product Name</li>
                <li>RAM</li>
                <li>CPU</li>
                <li>Prices</li>
                <li>Storage Volume</li>
              </ul>
            </div>
            <div className=" data">
              <h4>Networking</h4>
              <ul>
                <li>Provider</li>
                <li>Product Name</li>
                <li>RAM</li>
                <li>CPU</li>
                <li>Prices</li>
                <li>Storage Volume</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Download;
