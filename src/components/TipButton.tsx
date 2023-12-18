type TipButtonProps = {
  percentage: number;
  tipChange: number;
};

export default function TipButton({ percentage, tipChange }: TipButtonProps) {
  return (
    <div className="h-12 bg-veryDarkCyan rounded text-white hover:bg-strongCyan/70 hover:text-veryDarkCyan">
      <input
        type="radio"
        name="tip-value"
        id={`${percentage}`}
        value={percentage / 100}
        placeholder={`${percentage}%`}
        className="hidden"
        onClick={tipChange}
      />
      <label
        htmlFor={`${percentage}`}
        className="block w-full h-full text-center hover:cursor-pointer "
      >
        {percentage}%
      </label>
    </div>
  );
}
