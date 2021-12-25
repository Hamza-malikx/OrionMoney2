import "./App.css";
import styles from "./main.module.css";
import logo from "./images/favicon.ico";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
function App() {
  return (
    <div className={styles.App}>
      <div className="d-flex">
        <div className={styles.lefts}>
          <div className={styles.leftLogo}>
            <img src={logo} alt="" />
          </div>
        </div>
        <div className={styles.centers}>
          <div className={styles.rightContent}>
            <ul className={styles.list}>
              <li className={styles.svgFirst}>
                <svg
                  width="24"
                  height="24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    clipRule="evenodd"
                    d="M0 12C0 5.367 5.368 0 12 0c6.633 0 12 5.368 12 12 0 6.633-5.368 12-12 12H.937A.937.937 0 010 23.062V12zm2 10h10c5.596 0 10-4.404 10-10 0-5.597-4.404-10-10-10C6.403 2 2 6.404 2 12v10zm9.845-15.437c-2.206 0-3.219 1.307-3.219 2.19 0 .636.54.93.98.93.372 0 .523-.223.699-.481.24-.355.526-.777 1.49-.777.818 0 1.471.36 1.471 1.111 0 .722-.612 1.193-1.13 1.59a8.673 8.673 0 00-.324.257c-.474.408-1.095 1.078-1.095 2.483 0 .85.23 1.095.9 1.095.8 0 .963-.36.963-.67 0-.85.017-1.34.915-2.042.441-.343 1.83-1.455 1.83-2.99 0-1.536-1.389-2.696-3.48-2.696zm-.213 9.525c-.686 0-1.241.572-1.241 1.259 0 .67.539 1.258 1.241 1.258a1.27 1.27 0 001.258-1.258 1.27 1.27 0 00-1.258-1.259z"
                  ></path>
                </svg>
              </li>
              <li className={styles.svgSecond}>
                <div className={styles.rectangle}>
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTExLjg2ODEgMUwxMS43MTggMS41MDk4MlYxNi4zMDIzTDExLjg2ODEgMTYuNDUyTDE4LjczNDUgMTIuMzkzMkwxMS44NjgxIDFaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNMTEuODY2NSAxTDUgMTIuMzkzMkwxMS44NjY1IDE2LjQ1MlY5LjI3MjE1VjFaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNMTEuODY4MiAxNy43NUwxMS43ODM2IDE3Ljg1MzJWMjMuMTIyNUwxMS44NjgyIDIzLjM2OTRMMTguNzM4NyAxMy42OTM0TDExLjg2ODIgMTcuNzVaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNMTEuODY2NSAyMy4zNjk0VjE3Ljc1TDUgMTMuNjkzNEwxMS44NjY1IDIzLjM2OTRaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNMTEuODY1NSAxNi40NTQ0TDE4LjczMTggMTIuMzk1NkwxMS44NjU1IDkuMjc0NTRWMTYuNDU0NFoiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik01IDEyLjM5NTZMMTEuODY2NSAxNi40NTQ0VjkuMjc0NTRMNSAxMi4zOTU2WiIgZmlsbD0id2hpdGUiLz4KPC9zdmc+Cg=="
                    alt=""
                  />
                </div>
                <div
                  style={{
                    borderRadius: "10px",
                    overflow: "hidden",
                    padding: "0px",
                    margin: "5px 6px 0 0",
                    width: "20px",
                    height: "20px",
                    display: "inline-block",
                    background: "rgb(241, 158, 2)",
                  }}
                >
                  <svg x="0" y="0" width="20" height="20">
                    <rect
                      x="0"
                      y="0"
                      width="20"
                      height="20"
                      transform="translate(3.8393309815104435 0.2210895539822714) rotate(45.7 10 10)"
                      fill="#C7144C"
                    ></rect>
                    <rect
                      x="0"
                      y="0"
                      width="20"
                      height="20"
                      transform="translate(-6.2193253729675515 3.04460795385428) rotate(170.9 10 10)"
                      fill="#01888C"
                    ></rect>
                    <rect
                      x="0"
                      y="0"
                      width="20"
                      height="20"
                      transform="translate(18.545317490452817 5.590885835772508) rotate(45.6 10 10)"
                      fill="#1598F2"
                    ></rect>
                  </svg>
                </div>
                <div className={styles.oxdText}>0xd60cFe...cd1D76</div>
              </li>
            </ul>
          </div>
        </div>
        {/* <div className="col-2"></div> */}
      </div>
      <div className={styles.SecondRow}>
        <div className={styles.lefts}>
          <ul className={styles.potfolioBalance}>
            <li>Portfolio Balance</li>
            <li>$0.000</li>
            <li>Intersest Earned</li>
            <li>-</li>
          </ul>
          <div className={styles.bottoms}>
            <div className={styles.howIt}>
              <a href="/" target="_blank">
                How it works
              </a>
              <a href="/" target="_blank">
                Audit Report
              </a>
            </div>
            <div className={styles.howIt}>
              <a href="/" target="_blank">
                Twitter
              </a>
              <a href="/" target="_blank">
                Telegram
              </a>
            </div>
            <div className={styles.howItImgs}>
              <img
                src="https://app.orion.money/_nuxt/img/logo-terra.78e3f34.svg"
                alt=""
              />
              <img
                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjgiIGhlaWdodD0iNjgiIHZpZXdCb3g9IjAgMCA2OCA2OCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTM0IDY4QzE1LjMgNjggMCA1Mi43IDAgMzRDMCAxNS4zIDE1LjMgMCAzNCAwQzUyLjcgMCA2OCAxNS4zIDY4IDM0QzY4IDUyLjcgNTIuNyA2OCAzNCA2OFoiIGZpbGw9IiMxRTFFMUUiLz4KPHBhdGggb3BhY2l0eT0iMC40IiBkPSJNNTMuNzcyNyA0MC42NTMzQzU1LjQ3MjcgNDMuNzcgNTQuMzM5MyA0Ny43MzY3IDUxLjUwNiA0OS40MzY3QzQ4LjM4OTMgNTEuMTM2NyA0NC40MjI3IDUwLjAwMzMgNDIuNzIyNyA0Ny4xN0wyOS4xMjI3IDIzLjkzNjdDMjcuNDIyNyAyMC44MiAyOC41NTYgMTYuODUzMyAzMS42NzI3IDE1LjE1MzNDMzQuNzg5MyAxMy4xNyAzOC40NzI3IDE0LjMwMzMgNDAuNDU2IDE3LjQyTDUzLjc3MjcgNDAuNjUzM1oiIGZpbGw9IiM0QkRCNEIiLz4KPHBhdGggb3BhY2l0eT0iMC42NSIgZD0iTTI3LjA1MzggNDcuMTdDMjUuMzUzOCA1MC4yODY3IDIxLjM4NzEgNTEuNDIgMTguMjcwNCA0OS40MzY3QzE1LjE1MzggNDcuNzM2NyAxNC4wMjA0IDQzLjc3IDE2LjAwMzggNDAuNjUzM0wyOS4zMjA0IDE3LjQyQzMxLjAyMDQgMTQuMzAzMyAzNC45ODcxIDEzLjE3IDM4LjEwMzggMTUuMTUzM0M0MS4yMjA0IDE2Ljg1MzMgNDIuMzUzOCAyMC44MiA0MC4zNzA0IDIzLjkzNjdMMjcuMDUzOCA0Ny4xN1oiIGZpbGw9IiM0QkRCNEIiLz4KPHBhdGggZD0iTTQxLjIyNTEgMjAuNjgzM0M0MS4yMjUxIDI0LjM2NjYgMzQuNzA4NCAzMy40MzMzIDM0LjcwODQgMzMuNDMzM0MzNC43MDg0IDMzLjQzMzMgMjguNDc1MSAyNC4zNjY2IDI4LjQ3NTEgMjAuNjgzM0MyOC40NzUxIDE3IDMxLjMwODQgMTQuMTY2NiAzNC45OTE4IDE0LjE2NjZDMzguNjc1MSAxNC4xNjY2IDQxLjIyNTEgMTcuMjgzMyA0MS4yMjUxIDIwLjY4MzNaIiBmaWxsPSIjNUZDRTVGIi8+Cjwvc3ZnPgo="
                alt=""
              />
            </div>
            <div className={styles.howItLastText}>
              <p>Powered by Terra and Anchor</p>
              <p>Running on Ethereum Main Network</p>
            </div>
          </div>
        </div>
        <div className={styles.centers2}>
          <div className={styles.tabs}>
            <Tabs
              defaultActiveKey="home"
              id="uncontrolled-tab-example"
              className="mb-3"
            >
              <Tab eventKey="home" title="Saver">
                {/* <Sonnet /> */}
                <div className={styles.columns}>
                  <div className={styles.saverContent}>
                    <div>
                      <h2>My Deposit</h2>
                    </div>
                    <div>
                      <div className={styles.buttons}>
                        <button
                          type="button"
                          className="btn btn-outline-success me-1"
                        >
                          Deposit
                        </button>
                        <button
                          type="button"
                          className="btn btn-outline-success"
                        >
                          Withdraw
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className={styles.adminTableDiv}>
                    <table className={styles.adminTable}>
                      <thead className={styles.adminTableHead}>
                        <tr className={styles.admintableHeadRow}>
                          <th>Coin</th>
                          <th>Balance / Potfolio %</th>
                          <th>Interest rate</th>
                          <th>Interest earned</th>
                          <th>{""}</th>
                        </tr>
                      </thead>
                      <tbody className={styles.admintableBodyRow}>
                        <tr>
                          <td>
                            <div className={styles.tableBodyFirstColumn}>
                              <div>
                                <img
                                  src="https://app.orion.money/_nuxt/img/ust.3d60ffe.png"
                                  alt=""
                                />
                              </div>
                              <div>
                                <p>Wrapped UST</p>
                              </div>
                            </div>
                          </td>
                          <td>
                            <div className={styles.tableBodySecondColumn}>
                              <div className={styles.UST}>
                                <p>0.000 UST</p>
                              </div>
                              <div className={styles.percent}>
                                <p>0.0%</p>
                              </div>
                            </div>
                          </td>
                          <td>15.00%</td>
                          <td>-</td>
                          <td>{""}</td>
                        </tr>
                        <tr>
                          <td>
                            <div className={styles.tableBodyFirstColumn}>
                              <div>
                                <img
                                  src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTExLjk5OTYgMUwxNC43MjU4IDMuNzkxODhMNy44NjEwOCAxMC42NTY2TDUuMTM0ODkgNy45MzA0NEwxMS45OTk2IDFaIiBmaWxsPSIjRjBCOTBCIiBzdHJva2U9IiNGMEI5MEIiLz4KPHBhdGggZD0iTTE2LjEzODIgNS4xMzg2NkwxOC44NjQ0IDcuOTMwNTRMNy44NjEwOCAxOC45MzM5TDUuMTM0ODkgMTYuMjA3N0wxNi4xMzgyIDUuMTM4NjZaIiBmaWxsPSIjRjBCOTBCIiBzdHJva2U9IiNGMEI5MEIiLz4KPHBhdGggZD0iTTMuNzIyNDEgOS4yNzcxTDYuNDQ4NiAxMi4wNjlMMy43MjI0MSAxNC43OTUyTDAuOTk2MjE2IDEyLjA2OUwzLjcyMjQxIDkuMjc3MVoiIGZpbGw9IiNGMEI5MEIiIHN0cm9rZT0iI0YwQjkwQiIvPgo8cGF0aCBkPSJNMjAuMjc2OSA5LjI3NzFMMjMuMDAzMSAxMi4wNjlMMTEuOTk5OCAyMy4wNzIzTDkuMjczNTYgMjAuMzQ2MUwyMC4yNzY5IDkuMjc3MVoiIGZpbGw9IiNGMEI5MEIiIHN0cm9rZT0iI0YwQjkwQiIvPgo8L3N2Zz4K"
                                  alt=""
                                />
                              </div>
                              <div>
                                <p>Binance USD</p>
                              </div>
                            </div>
                          </td>
                          <td>
                            <div className={styles.tableBodySecondColumn}>
                              <div className={styles.UST}>
                                <p>0.000 BUSD</p>
                              </div>
                              <div className={styles.percent}>
                                <p>0.0%</p>
                              </div>
                            </div>
                          </td>
                          <td>15.00%</td>
                          <td>-</td>
                          <td>{""}</td>
                        </tr>
                        <tr>
                          <td>
                            <div className={styles.tableBodyFirstColumn}>
                              <div>
                                <img
                                  src="https://app.orion.money/_nuxt/img/usdt.701e0b7.svg"
                                  alt=""
                                />
                              </div>
                              <div>
                                <p>Tether </p>
                              </div>
                            </div>
                          </td>
                          <td>
                            <div className={styles.tableBodySecondColumn}>
                              <div className={styles.UST}>
                                <p>0.000 USDT</p>
                              </div>
                              <div className={styles.percent}>
                                <p>0.0%</p>
                              </div>
                            </div>
                          </td>
                          <td>15.00%</td>
                          <td>-</td>
                          <td>{""}</td>
                        </tr>
                        <tr>
                          <td>
                            <div className={styles.tableBodyFirstColumn}>
                              <div>
                                <img
                                  src="https://app.orion.money/_nuxt/img/usdc.a4a0b68.svg"
                                  alt=""
                                />
                              </div>
                              <div>
                                <p>USD Coin</p>
                              </div>
                            </div>
                          </td>
                          <td>
                            <div className={styles.tableBodySecondColumn}>
                              <div className={styles.UST}>
                                <p>0.000 USDC</p>
                              </div>
                              <div className={styles.percent}>
                                <p>0.0%</p>
                              </div>
                            </div>
                          </td>
                          <td>15.00%</td>
                          <td>-</td>
                          <td>{""}</td>
                        </tr>
                        <tr>
                          <td>
                            <div className={styles.tableBodyFirstColumn}>
                              <div>
                                <img
                                  src="data:image/webp;base64,UklGRt4BAABXRUJQVlA4TNEBAAAvH4AGEO/iOpJspWocciZMTQE+XZ6cNBxHkqRGKdZb/lujF5lyzHzNoJEkRXWPXt7J+7fCtOM4sm3TerbtN3718h9/K4Ofg62LHRC6LNr8mMtfyfp9m5lIpihDpP9404k0hFBBEwkUzUpQgwAGQQKQ0ThUvBQQIgsLlqL9UCWoCKEEhEhwBKBAhwINCsQEEX9AQQADQAQJTYcNNUEAQAEFBXLwFAdyAQdTUhNNlMj/nzH++O+P/T5Fyj59UrQ0L13fsqlJJvb/F0WSVxki5WavYfJPdzMQms3Gr9NDlu+8/7zy/7zqO0z7alr33br7jvetXu24LgDBtq1lydXfxlbs/mxsmmO31GdLfM5/IMAfiwlE9H8CJHn4TZzfz40VFdBf28PlvkCJu44PO2mA7OJ3gKR8fvbHj4HN3tAkFeMZ2P6IQIrl4fonCg1kYTISTcF+WZJzrgEvLnjzGerOObreGHMBWRNmAnaNkeRBUmGuw7taQ7uBwWjWYViq1Wp/8FgL8wl+azW63lo7Dpc2+EgOFqy1kjxIKvg07L2qbTg2CxOKYCgFq//hlZaArYpCKo+u5IHbonwVNjpendF6MNMjf0GPZt/ku3ri99Sszce+5BcA"
                                  alt=""
                                />
                              </div>
                              <div>
                                <p>DAI</p>
                              </div>
                            </div>
                          </td>
                          <td>
                            <div className={styles.tableBodySecondColumn}>
                              <div className={styles.UST}>
                                <p>0.000 DAI</p>
                              </div>
                              <div className={styles.percent}>
                                <p>0.0%</p>
                              </div>
                            </div>
                          </td>
                          <td>15.00%</td>
                          <td>-</td>
                          <td>{""}</td>
                        </tr>
                        <tr>
                          <td>
                            <div className={styles.tableBodyFirstColumn}>
                              <div>
                                <img
                                  src="https://app.orion.money/_nuxt/img/frax.6ed06f0.svg"
                                  alt=""
                                  width="32"
                                  height="32"
                                />
                              </div>
                              <div>
                                <p>FRAX</p>
                              </div>
                            </div>
                          </td>
                          <td>
                            <div className={styles.tableBodySecondColumn}>
                              <div className={styles.UST}>
                                <p>0.000 UST</p>
                              </div>
                              <div className={styles.percent}>
                                <p>0.0%</p>
                              </div>
                            </div>
                          </td>
                          <td>15.00%</td>
                          <td>-</td>
                          <td>{""}</td>
                        </tr>
                        <tr>
                          <td>
                            <div className={styles.tableBodyFirstColumn}>
                              <div>
                                <img
                                  src="https://app.orion.money/_nuxt/img/ico-orion.a4e7ef1.svg"
                                  alt=""
                                  width="32"
                                  height="32"
                                />
                              </div>
                              <div>
                                <p>ORION</p>
                              </div>
                            </div>
                          </td>
                          <td>
                            <div className={styles.tableBodySecondColumn}>
                              <div className={styles.UST}>
                                <p>0.000 UST</p>
                              </div>
                              {/* <div className={styles.percent}>
                                <p>0.0%</p>
                              </div> */}
                            </div>
                          </td>
                          <td>36.12%</td>
                          <td>-</td>
                          <td>
                            <div className={styles.lastColBtn}>
                              <button
                                type="button"
                                className="btn btn-outline-success me-1"
                              >
                                Buy
                              </button>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <div className={`${styles.btnbtn} btnbtn`}>
                      <button
                        type="button"
                        className="btn btn-outline-success me-1"
                      >
                        Buy
                      </button>
                    </div>
                  </div>
                </div>
              </Tab>
              <Tab eventKey="profile" title="Dashboard">
                <div className={styles.columns3}>
                  <h2>Total Value Locked (TVL) by asset</h2>
                  <ul className={styles.totalValueHeading}>
                    <li>Coin</li>
                    <li>Balance</li>
                  </ul>
                  <ul className={styles.totalValueSubHeadings}>
                    <li>
                      <div className={styles.fent}>
                        <div>
                          <img
                            src="https://app.orion.money/_nuxt/img/ust.3d60ffe.png"
                            alt=""
                          />
                        </div>
                        <div>
                          <p className={styles.context2}>Wrapped UST</p>
                        </div>
                        <div>
                          <p className={styles.context}>25,328,759.300 UST</p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className={styles.fent}>
                        <div>
                          <img
                            src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTExLjk5OTYgMUwxNC43MjU4IDMuNzkxODhMNy44NjEwOCAxMC42NTY2TDUuMTM0ODkgNy45MzA0NEwxMS45OTk2IDFaIiBmaWxsPSIjRjBCOTBCIiBzdHJva2U9IiNGMEI5MEIiLz4KPHBhdGggZD0iTTE2LjEzODIgNS4xMzg2NkwxOC44NjQ0IDcuOTMwNTRMNy44NjEwOCAxOC45MzM5TDUuMTM0ODkgMTYuMjA3N0wxNi4xMzgyIDUuMTM4NjZaIiBmaWxsPSIjRjBCOTBCIiBzdHJva2U9IiNGMEI5MEIiLz4KPHBhdGggZD0iTTMuNzIyNDEgOS4yNzcxTDYuNDQ4NiAxMi4wNjlMMy43MjI0MSAxNC43OTUyTDAuOTk2MjE2IDEyLjA2OUwzLjcyMjQxIDkuMjc3MVoiIGZpbGw9IiNGMEI5MEIiIHN0cm9rZT0iI0YwQjkwQiIvPgo8cGF0aCBkPSJNMjAuMjc2OSA5LjI3NzFMMjMuMDAzMSAxMi4wNjlMMTEuOTk5OCAyMy4wNzIzTDkuMjczNTYgMjAuMzQ2MUwyMC4yNzY5IDkuMjc3MVoiIGZpbGw9IiNGMEI5MEIiIHN0cm9rZT0iI0YwQjkwQiIvPgo8L3N2Zz4K"
                            alt=""
                          />
                        </div>
                        <div>
                          <p className={styles.context2}>Binance USD</p>
                        </div>
                        <div>
                          <p className={styles.context}>234,913.819 BUSD</p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className={styles.fent}>
                        <div>
                          <img
                            src="https://app.orion.money/_nuxt/img/usdt.701e0b7.svg"
                            alt=""
                          />
                        </div>
                        <div>
                          <p className={styles.context2}>Tether</p>
                        </div>
                        <div>
                          <p className={`${styles.context} ms-5`}>
                            9,909,162.684 USDT
                          </p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className={styles.fent}>
                        <div>
                          <img
                            src="https://app.orion.money/_nuxt/img/usdc.a4a0b68.svg"
                            alt=""
                          />
                        </div>
                        <div>
                          <p className={styles.context2}>USD Coin</p>
                        </div>
                        <div>
                          <p className={`${styles.context} ms-3`}>
                            18,272,008.884 USDC
                          </p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className={styles.fent}>
                        <div>
                          <img
                            src="data:image/webp;base64,UklGRt4BAABXRUJQVlA4TNEBAAAvH4AGEO/iOpJspWocciZMTQE+XZ6cNBxHkqRGKdZb/lujF5lyzHzNoJEkRXWPXt7J+7fCtOM4sm3TerbtN3718h9/K4Ofg62LHRC6LNr8mMtfyfp9m5lIpihDpP9404k0hFBBEwkUzUpQgwAGQQKQ0ThUvBQQIgsLlqL9UCWoCKEEhEhwBKBAhwINCsQEEX9AQQADQAQJTYcNNUEAQAEFBXLwFAdyAQdTUhNNlMj/nzH++O+P/T5Fyj59UrQ0L13fsqlJJvb/F0WSVxki5WavYfJPdzMQms3Gr9NDlu+8/7zy/7zqO0z7alr33br7jvetXu24LgDBtq1lydXfxlbs/mxsmmO31GdLfM5/IMAfiwlE9H8CJHn4TZzfz40VFdBf28PlvkCJu44PO2mA7OJ3gKR8fvbHj4HN3tAkFeMZ2P6IQIrl4fonCg1kYTISTcF+WZJzrgEvLnjzGerOObreGHMBWRNmAnaNkeRBUmGuw7taQ7uBwWjWYViq1Wp/8FgL8wl+azW63lo7Dpc2+EgOFqy1kjxIKvg07L2qbTg2CxOKYCgFq//hlZaArYpCKo+u5IHbonwVNjpendF6MNMjf0GPZt/ku3ri99Sszce+5BcA"
                            alt=""
                          />
                        </div>
                        <div>
                          <p className={styles.context2}>DAI</p>
                        </div>
                        <div>
                          <p className={`${styles.context} ms-5`}>
                            1,423,349.627 DAI
                          </p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className={styles.fent}>
                        <div>
                          <img
                            width="28"
                            height="28"
                            src="https://app.orion.money/_nuxt/img/frax.6ed06f0.svg"
                            alt=""
                          />
                        </div>
                        <div>
                          <p className={styles.context2}>FRAX</p>
                        </div>
                        <div>
                          <p className={`${styles.context} ms-5`}>
                            8,618.468 FRAX
                          </p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className={styles.fent}>
                        <div>
                          <img
                            width="28"
                            height="28"
                            src="https://app.orion.money/_nuxt/img/ico-orion.a4e7ef1.svg"
                            alt=""
                          />
                        </div>
                        <div>
                          <p className={styles.context2}>ORION</p>
                        </div>
                        <div>
                          <p className={`${styles.context} ms-4`}>
                            69,999,999.999 ORION (63,853,857.112 USD)
                          </p>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </Tab>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
