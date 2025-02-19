import Picker from "react-mobile-picker";
import styles from "./PeriodPickerModal.module.css";
import { useEffect, useState } from "react";

const PeriodPicker = ({ pickerValue, setPickerValue }) => {
  const date = new Date();

  const selections = {
    year: Array.from({ length: 24 }, (_, i) =>
      (i + Number(date.getFullYear()) - 12).toString()
    ),
    month: Array.from({ length: 12 }, (_, i) => String(i + 1).padStart(2, "0")),
  };

  const [days, setDays] = useState([]);

  const getDaysInMonth = (year, month) => {
    if (!year || !month) return [];
    const lastDay = new Date(year, month, 0).getDate();
    return Array.from({ length: lastDay }, (_, i) =>
      String(i + 1).padStart(2, "0")
    );
  };

  useEffect(() => {
    const { year, month, day } = pickerValue;

    if (year && month) {
      const updatedDays = getDaysInMonth(year, month);
      setDays(updatedDays);

      if (!updatedDays.includes(day)) {
        setPickerValue((prev) => ({
          ...prev,
          day: updatedDays[updatedDays.length - 1], // 마지막 날짜로 변경
        }));
      }
    }
  }, [pickerValue.year, pickerValue.month]);

  return (
    <>
      <Picker
        value={pickerValue}
        onChange={setPickerValue}
        wheelMode="normal"
        className={styles.customPicker}
        height={132}
      >
        {Object.entries({ ...selections, day: days }).map(([name, options]) => (
          <Picker.Column key={name} name={name}>
            {options.map((option) => (
              <Picker.Item key={option} value={option}>
                {({ selected }) => (
                  <div
                    style={{
                      backgroundColor: selected ? "#FAFAFA" : "transparent",
                      color: selected ? "#5E5E5E" : "#BEBEBE",
                      fontWeight: selected ? "700" : "500",
                      fontFamily: "Pretendard",
                      fontSize: "20px",
                    }}
                  >
                    {option}
                  </div>
                )}
              </Picker.Item>
            ))}
          </Picker.Column>
        ))}
      </Picker>
    </>
  );
};

export default PeriodPicker;
