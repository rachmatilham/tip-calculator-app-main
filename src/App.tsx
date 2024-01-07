import { MouseEventHandler, useEffect, useState } from "react";
import TipButton from "./components/TipButton";

export default function App() {
  const [totalBill, setTotalBill] = useState<number>(0);
  const [tip, setTip] = useState<number>(0);
  const [tipAmount, setTipAmount] = useState<number>(0);
  const [people, setPeople] = useState<number>(1);
  const [customTip, setCustomTip] = useState<number>(0);

  const tipArray: number[] = [5, 10, 15, 25, 50];

  useEffect(() => {
    setTipAmount(tip * totalBill);
  }, [tip, totalBill]);

  const totalPrice: number = totalBill + tipAmount;
  const tipPerPerson: number = parseFloat((tipAmount / people).toFixed(2));
  const pricePerPerson: number = parseFloat((totalPrice / people).toFixed(2));

  const handleReset: MouseEventHandler<HTMLButtonElement> = () => {
    setTotalBill(0);
    setTip(0);
    setTipAmount(0);
    setPeople(1);
  };

  return (
    <>
      <main className="pt-[50px] lg:pt-[163px] lg:pb-[218px] bg-lightGrayishCyan">
        <img src="./images/logo.svg" alt="Splitter Logo" className="mx-auto" />
        <article className="lg:w-[63.9%] mt-10 lg:mt-[87px] lg:mx-auto lg:py-8 lg:pl-12 lg:pr-8 bg-white rounded-t-[20px] lg:rounded-3xl lg:flex lg:justify-center lg:gap-x-12">
          <section className="pt-8 lg:pt-[13px] px-8 lg:px-0 lg:flex-1">
            <h1 className="text-darkGrayishCyan text-base">Bill</h1>
            <div className="w-full h-12 mt-[6px] px-4 bg-veryLightGrayishCyan flex justify-between items-center rounded hover:cursor-pointer hover:border-2 hover:border-solid hover:border-strongCyan">
              <img
                src="./images/icon-dollar.svg"
                alt="Dollar Icon"
                className="w-3 h-4"
              />
              <input
                type="number"
                name="bill-input"
                id="bill-input"
                className="text-veryDarkCyan text-right bg-transparent placeholder:text-grayishCyan focus:outline-none hover:cursor-pointer"
                value={totalBill}
                placeholder="0"
                onChange={(e) => setTotalBill(parseFloat(e.target.value))}
              />
            </div>

            <h2 className="mt-8 lg:mt-10 text-darkGrayishCyan text-base">
              Select Tip %
            </h2>
            <div className="mt-4 grid grid-cols-2 lg:grid-cols-3 gap-4">
              {tipArray.map((tipArr) => (
                <TipButton
                  key={tipArr}
                  percentage={tipArr}
                  tipChange={(e) => setTip(parseFloat(e.currentTarget.value))}
                />
              ))}
              <div>
                <input
                  type="number"
                  name="tip-value"
                  id="custom-value"
                  min={0}
                  max={100}
                  value={customTip * 100}
                  placeholder="Custom"
                  className="block w-full h-full text-center hover:cursor-pointer bg-veryLightGrayishCyan rounded placeholder:text-darkGrayishCyan hover:border-2 hover:border-solid hover:border-strongCyan outline-none"
                  onChange={(e) =>
                    setCustomTip(parseFloat(e.target.value) / 100)
                  }
                />
              </div>
            </div>

            <div className="flex justify-between">
              <h2 className="mt-7 lg:mt-10 text-darkGrayishCyan text-base">
                Number of People
              </h2>
              <h2
                className={
                  "mt-7 lg:mt-10 text-red-600 text-base " +
                  (people > 0 ? "hidden" : "")
                }
              >
                Can't be zero
              </h2>
            </div>
            <div
              className={
                "w-full h-12 mt-[11px] lg:mt-2 px-4 bg-veryLightGrayishCyan flex justify-between items-center rounded hover:cursor-pointer hover:border-2 hover:border-solid hover:border-strongCyan " +
                (people === 0 ? "border-2 border-solid border-red-600" : "")
              }
            >
              <img
                src="./images/icon-person.svg"
                alt="Person Icon"
                className="w-3 h-4"
              />
              <input
                type="number"
                name="people-input"
                id="people-input"
                className="text-veryDarkCyan text-right bg-transparent placeholder:text-grayishCyan focus:outline-none hover:cursor-pointer"
                value={people}
                placeholder="0"
                min={0}
                onChange={(e) =>
                  people >= 0 || people !== null
                    ? setPeople(parseFloat(e.target.value))
                    : ""
                }
              />
            </div>
          </section>

          <section className="mt-[31px] lg:mt-0 mx-6 lg:mx-0 p-6 lg:p-10 lg:pb-11 bg-veryDarkCyan rounded-xl lg:flex-1">
            <div className="flex justify-between mt-4">
              <div className="container">
                <h2 className="text-white text-base">Tip Amount</h2>
                <h3 className="text-grayishCyan text-[0.81rem]">/ person</h3>
              </div>
              <div className="text-strongCyan lg:text-5xl">${tipPerPerson}</div>
            </div>

            <div className="flex justify-between mt-6 lg:mt-12">
              <div className="container">
                <h2 className="text-white text-base">Total</h2>
                <h3 className="text-grayishCyan text-[0.81rem]">/ person</h3>
              </div>
              <div className="text-strongCyan lg:text-5xl">
                ${pricePerPerson}
              </div>
            </div>
            <button
              className={
                "mt-9 lg:mt-32 w-full h-12 rounded bg-strongCyan text-veryDarkCyan uppercase hover:bg-[#9fe8df] " +
                (totalBill == 0 && tip == 0 && tipAmount == 0 && people == 1
                  ? "cursor-not-allowed bg-[#0d686d]"
                  : "")
              }
              onClick={handleReset}
            >
              Reset
            </button>
          </section>
        </article>
      </main>

      <footer className="attribution mt-3 lg:mt-0">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a href="https://github.com/rachmatilham">Rachmat Ilham Maulana</a>.
      </footer>
    </>
  );
}
