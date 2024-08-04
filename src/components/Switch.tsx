import React from 'react';

const SWITCH_WIDTH_PX = 36;
const HANDLE_DIAMETER_PX = 15;
const SWITCH_OFFSET_PX = 2;

interface SwitchProps {
  value: boolean;
  onClick: (newValue: boolean) => void;
}

const Switch: React.FC<SwitchProps> = ({
  value,
  onClick,
}) => {
  return (
    <div
      className={`relative inline-flex items-center cursor-pointer transition-all duration-300 ${value ? "bg-blue-500" : "bg-gray-300"}`}
      style={{
        width: SWITCH_WIDTH_PX,
        height: HANDLE_DIAMETER_PX + 2 * SWITCH_OFFSET_PX,
        borderRadius: HANDLE_DIAMETER_PX,
        border: "1px #ddd solid",
      }}
      onClick={() => onClick(!value)}
    >
      <div
        className={`absolute rounded-full transition-all duration-300 ${value ? "bg-white" : "bg-blue-500"}`}
        style={{
          height: HANDLE_DIAMETER_PX,
          width: HANDLE_DIAMETER_PX,
          top: SWITCH_OFFSET_PX,
          left: value ? SWITCH_WIDTH_PX - HANDLE_DIAMETER_PX - SWITCH_OFFSET_PX : SWITCH_OFFSET_PX,
        }}
      />
      <input
        type="checkbox"
        checked={value}
        onChange={(e) => onClick(e.target.checked)}
        className="hidden"
      />
    </div>
  );
};

export default Switch;
